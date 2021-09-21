/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import axios from 'axios';
const Header = styled.div`
position : absolute;
display : flex;
justify-content : center;
width : 100%;
background-color : red ;
height : 40%;
`;

const TittleWrapper = styled.div`
display : flex;
flex-direction: column;
width : 30%;
align-self : flex-end;
margin-left : -10rem;

& :first-child{
    font-size : ${props => props.theme.fontSizes.large};
    color : ${props => props.theme.colors.white};
};
& :nth-child(2){
    font-size : ${props => props.theme.fontSizes.medium};
    color : ${props => props.theme.colors.transparentWhite};
};  

& :nth-child(3){
    font-size : ${props => props.theme.fontSizes.small};
    color : ${props => props.theme.colors.transparentWhite};
};

`;

const Content = styled.div`
padding-left : 35rem;
margin-top: -4.5rem;
display : flex;
`;

const GameCardWrapper = styled.div`
width : 15rem;
height : 25rem;
display : flex;
z-index : 5;
flex-direction : column;
gap : 1rem;
justify-content: center;
position : relative;
top : 6rem;
left : 20rem;
`;

const GameCard = styled.div`
background : green;
width : 100%;
height : 78%;

`;

const Followbtn = styled.button`
width : 100%;
height : 10%;
`;

const GameCardDesc = styled.div`
width : 100%;
height : 10;
font-size : ${props => props.theme.fontSizes.small};
color : ${props => props.theme.colors.transparentWhite};
`;

const GameDetailsCard = styled.div`
width : 50%;
min-height : 30rem;
background-color : blue;
`;

const GameRatingCard = styled.div`
width : 25%;
background-color:yellow;

`;

function Game() {
	const { name } = useParams();

	const [exists, setExists] = useState(true);

	const queryGame = async () =>{
		axios({
			url: `https://rawg-video-games-database.p.rapidapi.com/games/${name}?key=43d9190ae1bb47f9a9a2276650e8b411`,
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
				'x-rapidapi-key': '4d60ceecd9mshd2062f54ef385b3p131f5bjsnee5d0dd46364'			
			},
		})
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.error(err);
				setExists(false);
			});
		
	};
	useEffect(() => {
		
		queryGame();

	}, []);


	return (
		<div>

			<Header>
				<TittleWrapper><div>{name} : Edition test</div> <div>description dedede</div> <div>company name : test</div></TittleWrapper>
			</Header>

			<GameCardWrapper>
				<GameCard/>
				<Followbtn>follow</Followbtn>
				<GameCardDesc> test desc</GameCardDesc>
			</GameCardWrapper>
			<Content>
				<GameDetailsCard/>
				<GameRatingCard/>
			</Content>
		
		</div>
	);
}

export default Game;
