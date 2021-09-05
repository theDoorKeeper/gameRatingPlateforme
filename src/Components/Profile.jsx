import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './AuthProvider';

const IgnoreDiv = styled.div`
	display : none ;
`;

const Content = styled.div`
	width : 100%;
	height : 100vh;
`;

const CoverPhoto = styled.div`
	width : 100%;
	height : 50%;
	background-color : blue;
`;

const ProfileCard = styled.div`
	position : relative;
	width : 15rem;
	height : 20rem;
	display : flex;
	flex-direction : column;
	justify-content : center;
	gap : 0.5rem;
	left : 10%;
	top : 50%;
	z-index : 2;
`;

const ProfilePicture = styled.div`
	width : 100%;
	height : 15rem;
	background-color : white;
	border : 3px solid ${props => props.theme.colors.primaryGreen};
`;

const ProfileName = styled.div`
	width : 100%;
	height : 2rem;
	font-size : ${props => props.theme.fontSizes.medium};
	color : white;
	text-align : center;
`;

const ProfileDate = styled.div`
	width : 100%;
	font-size : ${props => props.theme.fontSizes.small};
	color : ${props => props.theme.colors.transparentWhite};
	text-align : center;
`;

const DetailsContainer = styled.div`
	  width : 100%;
	  margin : auto;
	  height: 50rem; ;
	  background-color : red;	
	  display : flex;
	  flex-direction : column;
	  align-items : center;
`;

const DetailsNavbar = styled.div`
	width : 100%;
	height : 3rem;
	color : white;
	font-size : ${props => props.theme.fontSizes.small};
	background-color : black;
`;

const DetailsContent = styled.div`
	width : 50%;
	height : 30rem;
	background-color : gray;

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
				<CoverPhoto>
					<ProfileCard>
						<ProfilePicture/>
						<ProfileName>Thedoorkeeper</ProfileName>
						<ProfileDate>Joined on Dec 07, 2019</ProfileDate>
					</ProfileCard>
				</CoverPhoto>
				<DetailsContainer>
					<DetailsNavbar/>
					<DetailsContent/>
				</DetailsContainer>
			</Content>
		</>
	);
}

export default Profile;