/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';

const WishedWrapper = styled.div`
	width : 100%;
	gap : 5px;
	display : flex;
	flex-wrap : wrap;
	justify-content : center; 
`;

function Lists(props) {
	const {user, notUser} = props;
	const [wishedArray, setWishedArray] = useState([]);

	useEffect(() => {
		setWishedArray( user.wishList.map( game => <GameCard  title={game.name} image={game.picture} key={game.name} /> ) );
		
	}, [user]);
	return (
		<div>
			Wished games :
			<WishedWrapper>
				{wishedArray}
			</WishedWrapper> 
		</div>
	);
}

export default Lists;
