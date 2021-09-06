import React from 'react';
import styled from 'styled-components';

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
	width : 100%;
	height : 3rem;
	color : white;
	font-size : ${props => props.theme.fontSizes.small};
	background-color : ${props => props.theme.colors.backgroundGray};
`;

const Content = styled.div`
	width : 50%;
	height : 30rem;
	background-color : ${props => props.theme.colors.transparentBlack};
`;
function ProfileDetails() {
	return (
		<>
			<Container>
				<NavbarContainer/>
				<Content/>
			</Container>
		</>
	);
}

export default ProfileDetails;
