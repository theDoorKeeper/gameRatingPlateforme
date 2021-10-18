/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    padding : 15px;
`;

const GameListContainer = styled.div`
    width : 70%;
    display : flex;
    flex-wrap : wrap;
`;


const TypesContainer = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    gap : 10px;
`;

const TypeButton = styled.button`
    width : 80%;
    height : 3rem;
    border-radius : 30px;
    border : none ;
`;


function GameHub() {
	const [genre, setGenre] = useState('');
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
				<TypeButton onClick={getGenre}>fps</TypeButton>
				<TypeButton>simulation</TypeButton>
			</TypesContainer>
			<GameListContainer/>
		</Container>
	);
}

export default GameHub;
