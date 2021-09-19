/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthProvider';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileImages from './Profile/ProfileImages';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Content = styled.div`
	width : 100%;
	height : 100vh;
`;

function Profile() {

	const [userData, setuserData] = useState({});
	const [loading, setLoading] = useState(false);
	const {logout,currentUser} = useAuth();
	const history = useHistory();
	let { path, url } = useRouteMatch();

	const handleLogout  = async()=>{
		await logout();
		history.push('/');
	};

	useEffect(() => {
	
		const docRef = query(collection(db, 'users'), where('uid', '==', currentUser.uid));

		const unsub = onSnapshot(docRef, (querySnapshot) => {
			setLoading(true); 
			let data = {};
			querySnapshot.forEach((doc) => {
				data = doc.data();
				console.log('edited');
			});
			setuserData(data);
			setLoading(false);
		});

		return unsub;

	},[]);

	
	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const docRef = query(collection(db, 'users'), where('uid', '==', currentUser.uid));

			const docSnap = await getDocs(docRef);
			docSnap.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				setuserData(doc.data());
			});
 
			setLoading(false);
		};

		getData();

	}, []);

	return (
		<>
			<>
				{ !loading && 'this is his is '  + userData.eMail + ' profile' }
				<button onClick={handleLogout}>Logout</button>
			</>
			{userData && <Content>
				<ProfileImages  user={userData} ready={!loading}/>
				<ProfileDetails path={path} url={url} user={userData} ready={!loading} />
			</Content>}
		</>
	);
}

export default Profile;