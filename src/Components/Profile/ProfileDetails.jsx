/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Bio from './Bio';
import Followers from './Followers';
import Lists from './Lists';
import Navbar from './Navbar';

const Container = styled.div`
	  width : 100%;
	  margin : auto;
	  height: 50rem; ;
	  background-color : ${props => props.theme.colors.lightGray};	
	  display : flex;
	  flex-direction : column;
	  align-items : center;
`;

const NavbarContainer = styled.div`
	width : 70%;
	height : 3rem;
	color : white;
	font-size : ${props => props.theme.fontSizes.small};
	background-color : ${props => props.theme.colors.backgroundGray};
	padding-left: 30%;
`;

const Content = styled.div`
	width : 50%;
	height : 30rem;
	background-color : ${props => props.theme.colors.transparentBlack};
`;
function ProfileDetails(props) {

	const {path, url, user} = props;

	return (
		<>
			<Container>
				<NavbarContainer>
					<Navbar url={url}/>
				</NavbarContainer>
				<Content>
					<Route  exact path={path} > <Bio user={user}/> </Route>	
					<Route path={`${path}/Lists`} > <Lists/> </Route>
					<Route path={`${path}/Followers`} > <Followers/> </Route>
				</Content>
			</Container>
		</>
	);
}

export default ProfileDetails;
