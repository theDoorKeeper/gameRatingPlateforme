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
	min-width : 100%;
	height : 10em;
	background : ${props => props.theme.colors.transparentBlack};;
	cursor : pointer;
	border-radius : 8px;
	&:hover{
	  backdrop-filter: blur(10px);
      filter: blur(4px);
      transition: 0.2s ease;
	}
`;

const GameInfo = styled.div`
	position : relative;
	max-width : fit-content;
	top : -45%;
	text-align : center;
	color : ${props => props.theme.colors.transparentWhite};
	font-size : ${props => props.theme.fontSizes.large};
	cursor : pointer;
	&:hover{
		color : ${props => props.theme.colors.primaryGreen};
	}
`;	
function GameCard(props) {
	const {image, title, rating} = props;
	let history = useHistory();
	const [ratingState, setRatingState] = useState('');
	
	useEffect(() => {
		if(typeof(rating) === 'boolean'){
			rating ? setRatingState('Liked') : setRatingState('Disliked');
			
		}
		console.log(typeof(rating));
	}, [rating]);

	const gotoGamepage = ()=>{
		history.push(`/Game/${title.split(' ').join('-')}`);
	};
	


	return (
		<Card>
			<GameImage src={image}/>
			<GameInfo onClick={gotoGamepage}>
				{title}
			</GameInfo>
			{ ratingState}
		</Card>
	);
}

export default GameCard;
