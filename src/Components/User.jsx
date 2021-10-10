/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileImages from './Profile/ProfileImages';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthProvider';


const Content = styled.div`
	width : 100%;
	height : 100vh;
`;

function User() {
	const { name } = useParams();
	const [userData, setuserData] = useState({});
	const [loading, setLoading] = useState(false);
	const [notUser, setNotUser] = useState(true);
	const {currentUser} = useAuth();
	let { path, url } = useRouteMatch();


	useEffect(() => {
	
		const docRef = query(collection(db, 'users'), where('userName', '==', name));

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
			const docRef = query(collection(db, 'users'), where('userName', '==', name));

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
			{userData && <Content>
				<ProfileImages  user={userData} ready={!loading} notUser={notUser}/>
				<ProfileDetails path={path} url={url} user={userData} ready={!loading}  notUser={notUser} currentUser={currentUser}/>
			</Content>}
		</>
	);
}

export default User;