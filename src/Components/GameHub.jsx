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

	return (
		<Container>
			<TypesContainer>
				<TypeButton>action</TypeButton>
				<TypeButton>fps</TypeButton>
				<TypeButton>simulation</TypeButton>
			</TypesContainer>
			<GameListContainer/>
		</Container>
	);
}

export default GameHub;
