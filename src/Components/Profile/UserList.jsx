/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';


const ListWrapper = styled.div`
	padding-top : 2rem;
	width : 100%;
	gap : 15px;
	display : flex;
	flex-wrap : wrap;
	justify-content : center; 
`;

function UserList(props) {
	const {list} = props;
	const [array, setArray] = useState([]);
	const [userArray, setUserArray] = useState([]);

	useEffect(() => {
		
		
		const getList =async()=>{
			const tempArray = [];
			if(list){
				for  (let i = 0; i < list.length; i++){
					//used for loop instead of forEach to avoid async issues 
					const uid = list[i];
					const usersRef = collection(db, 'users');
					const q = query(usersRef, where('uid', '==', uid));
	
					const querySnapshot = await getDocs(q);
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						tempArray.push(doc.data());
					});	
					
				}}
			setUserArray(tempArray);
		};
		getList();

	
	}, [list]);

	useEffect(() => {
		console.log(userArray);
		setArray( userArray.map( user => <UserCard  title={user.name} image={user.picture} key={user.uid} /> ) );
	}, [userArray]);

	return (

		<ListWrapper>
			{array}
		</ListWrapper> 

	);
}

export default UserList;