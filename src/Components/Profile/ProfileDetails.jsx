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
