/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthProvider';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileImages from './Profile/ProfileImages';
import cover from '../assets/profileCoverTest.jpg';
import profilePicture from '../assets/profilePicture.png';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const IgnoreDiv = styled.div`
	display : none ;
`;

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
		const unsub = onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
			setuserData(doc.data());
		});

		return unsub();

	}, [currentUser]);

	
	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const docRef = doc(db, 'users',  currentUser.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {

				setuserData(docSnap.data());

			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
			setLoading(false);
		};

		getData();

	}, []);

	return (
		<>
			<>
				{ !loading && 'this is his is' + ' '  + userData.eMail + ' profile' }
				<button onClick={handleLogout}>Logout</button>
			</>
			<Content>
				<ProfileImages coverImage = {userData.profilePicture} profileImage = {userData.coverPicture} name='theDoorKeeper' user={currentUser}/>
				<ProfileDetails path={path} url={url} user={currentUser}/>
			</Content>
		</>
	);
}

export default Profile;