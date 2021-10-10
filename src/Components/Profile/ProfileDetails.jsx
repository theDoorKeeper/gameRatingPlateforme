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
import { Route } from 'react-router-dom';
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

	const addToFollowed = async () => {
		// adds the target user to the currentUsers' followed Array
		const docRef = query(
			collection(db, 'users'),
			where('uid', '==', currentUser.uid)
		);

		const docSnap = await getDocs(docRef);

		docSnap.forEach((doc) => {
			// in case the user has not followed anyone yet
			if (doc.data().followed.length === 0) {
				updateDoc(doc.ref, {
					followed: arrayUnion({ name: user.name, uid: user.uid }),
				});
			}

			doc.data().followed.forEach((followedUser) => {
				if (followedUser.uid === user.uid) {
					updateDoc(doc.ref, {
						followed: arrayRemove({ name: user.name, uid: user.uid }),
					});
				} else {
					updateDoc(doc.ref, {
						followed: arrayUnion({ name: user.name, uid: user.uid }),
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
					followers: arrayUnion({ name: currentUser.name, uid: currentUser.uid }),
				});
			}

			doc.data().followers.forEach((follower) => {
				if (follower.uid === currentUser.uid) {
					updateDoc(doc.ref, {
						followers: arrayRemove({ name: currentUser.name, uid: currentUser.uid }),
					});
				} else {
					updateDoc(doc.ref, {
						followers: arrayUnion({ name: currentUser.name, uid: currentUser.uid }),
					});
				}
			});
		});

	};
	return (
		<>
			<Container>
				<NavbarContainer>
					<Navbar url={url} />
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
