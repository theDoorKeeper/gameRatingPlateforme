/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
	arrayRemove,
	arrayUnion,
	collection,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { db } from '../../firebase';
import Bio from './Bio';
import Followers from './Followers';
import Lists from './Lists';
import Navbar from './Navbar';

const Container = styled.div`
  width: 100%;
  margin: auto;
  min-height: 50rem;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarContainer = styled.div`
  width: 70%;
  height: 3rem;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) => props.theme.colors.backgroundGray};
  padding-left: 30%;
`;

const Content = styled.div`
  width: 50%;
  min-height: 30rem;
  background-color: ${(props) => props.theme.colors.transparentBlack};
`;

function ProfileDetails(props) {
	const { path, url, user, notUser, currentUser } = props;
	const [isFollowed ,setIsFollowed] = useState(false);

	const addToFollowed = async () => {
		// adds the target user to the currentUsers' followed Array
		const docRef = query(
			collection(db, 'users'),
			where('uid', '==', currentUser.uid)
		);

		const docSnap = await getDocs(docRef);

		docSnap.forEach((doc) => {
			// in case the user has not followed anyone yet
			if (doc.data().following.length === 0) {
				updateDoc(doc.ref, {
					following: arrayUnion( user.uid ),
				});
			}

			doc.data().following.forEach((followedUser) => {
				if (followedUser === user.uid) {
					updateDoc(doc.ref, {
						following: arrayRemove( user.uid ),
					});
				} else {
					updateDoc(doc.ref, {
						following: arrayUnion( user.uid ),
					});
				}
			});
		});
	};

	const addToFollowers = async()=>{
		// adds the currentUser  to the target user's followers Array
		const docRef = query(
			collection(db, 'users'),
			where('uid', '==', user.uid)
		);

		const docSnap = await getDocs(docRef);

		docSnap.forEach((doc) => {
			// in case the user doesn't have any followers
			if (doc.data().followers.length === 0) {
				updateDoc(doc.ref, {
					followers: arrayUnion( currentUser.uid ),
				});
			}

			doc.data().followers.forEach((follower) => {
				if (follower === currentUser.uid) {
					updateDoc(doc.ref, {
						followers: arrayRemove( currentUser.uid ),
					});
				} else {
					updateDoc(doc.ref, {
						followers: arrayUnion( currentUser.uid ),
					});
				}
			});
		});

	};


	const FollowUser =()=>{
		addToFollowed();
		addToFollowers();
	};

	useEffect(() => {
		//checking if the array is empty , becayse the opperatiob below this one wont run and the isFollowed state wont turn to false if the array is empty
		user.followers  && user.followers.length < 1 ? setIsFollowed(false) : null ;


		user.followers && user.followers.forEach(follower=>{
			follower === currentUser.uid ? setIsFollowed(true) : setIsFollowed(false);
		});

	}, [user]);

	return (
		<>
			<Container>
				<NavbarContainer>
					<Navbar url={url} follow={FollowUser} notUser={notUser} isFollowed={isFollowed}/>
				</NavbarContainer>
				<Content>
					<Route exact path={path}>
						{' '}
						<Bio user={user} notUser={notUser} />{' '}
					</Route>
					<Route path={`${path}/Wishlist`}>
						{' '}
						<Lists list={user.wishList} notUser={notUser} />{' '}
					</Route>
					<Route path={`${path}/Rated games`}>
						{' '}
						<Lists list={user.ratings} notUser={notUser} />{' '}
					</Route>
					<Route path={`${path}/Followers`}>
						{' '}
						<Followers />{' '}
					</Route>
				</Content>
			</Container>
		</>
	);
}

export default ProfileDetails;
