/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';

const WishedWrapper = styled.div`
	padding-top : 2rem;
	width : 100%;
	gap : 15px;
	display : flex;
	flex-wrap : wrap;
	justify-content : center; 
`;

function Lists(props) {
	const {list} = props;
	const [gameArray, setgameArray] = useState([]);

	useEffect(() => {
		list &&  setgameArray( list.map( game => <GameCard  title={game.name} slug={game.slug} image={game.picture || game.background_image} rating={game.liked} key={game.name} /> ) );
	}, [list]);

	return (

		<WishedWrapper>
			{gameArray}
		</WishedWrapper> 

	);
}

export default Lists;
