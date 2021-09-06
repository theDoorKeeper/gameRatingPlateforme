/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	position : relative;
	width : 15rem;
	height : 20rem;
	display : flex;
	flex-direction : column;
	justify-content : center;
	gap : 0.5rem;
	left : 10%;
	top : 60%;
	z-index : 2;
`;

const ProfilePicture = styled.div`
	width : 100%;
	height : 15rem;
	background-color : white;
	background-image : ${props => props.profilePicture};
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

const CoverPicture = styled.div`
	width : 100%;
	height : 50%;
	background-color : blue;
    background-image : ${props=> props.image};
`;


function ProfileImages(props) {
	const {name, creationDate, profileImage, coverImage} = props;

	return (
		<CoverPicture image = {coverImage}> 
			<Wrapper>
				<ProfilePicture image={profileImage}/>
				<ProfileName>{name}</ProfileName>
				<ProfileDate>member since : {creationDate}</ProfileDate>
			</Wrapper>
		</CoverPicture>
	);
}

export default ProfileImages;
