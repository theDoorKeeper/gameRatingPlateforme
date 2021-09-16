/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthProvider';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileImages from './Profile/ProfileImages';

const IgnoreDiv = styled.div`
	display : none ;
`;

const Content = styled.div`
	width : 100%;
	height : 100vh;
`;

function Profile() {
	const {logout,currentUser} = useAuth();
	const history = useHistory();
	let { path, url } = useRouteMatch();

	const handleLogout  = async()=>{
		await logout();
		history.push('/');
	};

	return (
		<>
			<>
				{ ' profile' }
				<button onClick={handleLogout}>Logout</button>
			</>
			  <Content>
				<ProfileImages  user={currentUser} ready={currentUser}/>
				<ProfileDetails path={path} url={url} user={currentUser}/>
			</Content>
		</>
	);
}

export default Profile;