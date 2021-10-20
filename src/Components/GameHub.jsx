/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Lists from './Profile/Lists';

const Container = styled.div`
	padding : 2rem;
	margin : auto;
    width:90%;
    display:flex;
    padding : 15px;
	background-color : ${props => props.theme.colors.lightGray};
`;

const GameListContainer = styled.div`
    width : 70%;
    display : flex;
    flex-wrap : wrap;
`;


const TypesContainer = styled.div`
	padding-top : 2rem;
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 20px;
`;

const TypeButton = styled.button`
    width : 90%;
    height : 8rem;
    border-radius : 8px;
    border : none ;
	color : whitesmoke;
	background-color :  ${props => props.theme.colors.grey};
	font-size : ${props=>props.theme.fontSizes.large};
	text-decoration: none;
	text-transform: uppercase;
	border: 0 solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
	outline: 1px solid;
	outline-color: rgba(255, 255, 255, .5);
	outline-offset: 0px;
	text-shadow: none;
  	transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
	cursor : pointer;
	&:hover{
		color : ${props => props.theme.colors.primaryGreen};
		background-color : ${props => props.theme.colors.grey};
		border: 1px solid;
	box-shadow: inset 0 0 20px ${props => props.theme.colors.primaryGreen}, 0 0 20px rgba(255, 255, 255, .2);
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 15px;
	text-shadow: 1px 1px 2px #427388; 
	}
`;


function GameHub() {
	const [genre, setGenre] = useState('action');
	const [gameList, setGameList] = useState([]);


	const getGenre = (e)=>{
		setGenre(e.target.textContent);
		console.log(e.target.textContent);
	};

	useEffect(() => {
		const queryGame = async () => {
			axios({	
				method: 'GET',
				url: `https://rawg-video-games-database.p.rapidapi.com/games?genres=${genre}&key=43d9190ae1bb47f9a9a2276650e8b411`,
				headers: {
					'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
					'x-rapidapi-key': 'f99d20b2e9msh2a92c3966263053p1f15a8jsn4d1703a3f7b2'
				},
			}) 
				.then((response) => {
					console.log(response.data);
					const tempArray = [];
	
					response.data.results.forEach( result =>{
						tempArray.push(result);
					});
					setGameList(tempArray); 
				})
				.catch((err) => {
					console.log(err);
				});
		};

		queryGame();
	}, [genre]);

	return (
		<Container>
			<TypesContainer>
				<TypeButton onClick={getGenre}>action</TypeButton>
				<TypeButton onClick={getGenre}>strategy</TypeButton>
				<TypeButton onClick={getGenre}>role-playing-games-rpg</TypeButton>
				<TypeButton onClick={getGenre}>shooter</TypeButton>
				<TypeButton onClick={getGenre}>adventure</TypeButton>
				<TypeButton onClick={getGenre}>puzzle</TypeButton>
				<TypeButton onClick={getGenre}>racing</TypeButton>
				<TypeButton onClick={getGenre}>sports</TypeButton>
			</TypesContainer>
			<GameListContainer>
				<Lists list={gameList}/>
			</GameListContainer>
		</Container>
	);
}

export default GameHub;
