/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';

const WishedWrapper = styled.div`
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
	const {user, notUser} = props;
	const [wishedArray, setWishedArray] = useState([]);

	useEffect(() => {
		user.wishList &&  setWishedArray( user.wishList.map( game => <GameCard  title={game.name} image={game.picture} key={game.name} /> ) );
		
	}, [user]);
	return (
		<div>
			<Title>Wished games :</Title>
			<WishedWrapper>
				{wishedArray}
			</WishedWrapper> 
		</div>
	);
}

export default Lists;
