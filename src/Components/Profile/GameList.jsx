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
	const [array, setArray] = useState([]);

	useEffect(() => {
		list &&  setArray( list.map( game => <GameCard  title={game.name} image={game.picture} rating={game.liked} key={game.name} /> ) );
	}, [list]);

	return (

		<WishedWrapper>
			{array}
		</WishedWrapper> 

	);
}

export default Lists;