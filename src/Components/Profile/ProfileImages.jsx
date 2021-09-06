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

const ProfilePicture = styled.img`
	width : 250px;
	height : 250px;
	border : 3px solid transparent;
	&:hover{
		border : 3px solid ${props => props.theme.colors.primaryGreen};
		cursor : pointer;
	}
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
	background : url(${props=> props.image}) no-repeat center center fixed;
	background-color : blue;
	filter : 8px;
	background-size : cover;
`;


function ProfileImages(props) {
	const {name, creationDate, profileImage, coverImage} = props;

	return (
		<CoverPicture image = {coverImage}> 
			<Wrapper>
				<ProfilePicture src = {profileImage}/>
				<ProfileName>{name}</ProfileName>
				<ProfileDate>member since : {creationDate}</ProfileDate>
			</Wrapper>
		</CoverPicture>
	);
}

export default ProfileImages;
