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
const Title = styled.div`
	font-size : ${props => props.theme.fontSizes.large};
	color : ${props => props.theme.colors.white};
	max-width : fit-content;
	margin : auto;
`;
function Lists(props) {
	const {list} = props;
	const [gameArray, setgameArray] = useState([]);

	useEffect(() => {
		list &&  setgameArray( list.map( game => <GameCard  title={game.name} slug={game.slug} image={game.picture} rating={game.liked} key={game.name} /> ) );
	}, [list]);

	return (

		<WishedWrapper>
			{gameArray}
		</WishedWrapper> 

	);
}

export default Lists;
