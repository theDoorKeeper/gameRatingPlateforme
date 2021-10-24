/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthProvider';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileImages from './Profile/ProfileImages';

const Content = styled.div`
	width : 100%;
	height : 100vh;
`;

function Profile(props) {
	const {userData, loading} = props;

	const {logout} = useAuth();
	const history = useHistory();
	let { path, url } = useRouteMatch();

	const handleLogout  = async()=>{
		await logout();
		history.push('/');
	};


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