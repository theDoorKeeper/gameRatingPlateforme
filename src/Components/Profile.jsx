import React from 'react';
import { useHistory } from 'react-router-dom';
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

	const handleLogout  = async()=>{
		await logout();
		history.push('/');
	};

	return (
		<>
			<IgnoreDiv>
            this is his is {currentUser.email} profile
				<button onClick={handleLogout}>Logout</button>
			</IgnoreDiv>
			<Content>
				<ProfileImages/>
				<ProfileDetails/>
			</Content>
		</>
	);
}

export default Profile;