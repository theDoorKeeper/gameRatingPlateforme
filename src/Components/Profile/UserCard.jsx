/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
	width : 40%;
	color : ${props => props.theme.colors.white};
	border-radius : 8px;
`;

const GameImage = styled.img`
	min-width : 40%;
	height : 40%;
	background : ${props => props.theme.colors.transparentBlack};
	cursor : pointer;
	border-radius : 8px;
	&:hover{
	  backdrop-filter: blur(10px);
      filter: blur(4px);
      transition: 0.2s ease;
	}
`;

const UserName = styled.div`
/* 	position : relative; */
	min-width : 100%;
/* 	top : -45%; */
	text-align : center;
	color : ${props => props.theme.colors.transparentWhite};
	font-size : ${props => props.theme.fontSizes.large};
	cursor : pointer;
	&:hover{
		color : ${props => props.theme.colors.primaryGreen};
	}
`;	
function UserCard() {
	return (
		<Card>
			<GameImage />
			<UserName>test</UserName>
		</Card>
	);
}

export default UserCard;
