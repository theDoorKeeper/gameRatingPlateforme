import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	width : 40%;
	background : ${props => props.theme.colors.lightGray};
	color : ${props => props.theme.colors.white};
	display : flex;
	gap : 8px;
`;

const GameImage = styled.img`
	width : 60%;
	height : 10em;
	background : red;
	&:hover{
		filter:blur(8);
	}
`;

const GameInfo = styled.div`
	width : 40%;
	color : ${props => props.theme.colors.transparentWhite};
	background : ${props => props.theme.colors.transparentBlack};
	display : flex;
	flex-direction : column;
`;	
function GameCard() {
	return (
		<Card>
			<GameImage />
			<GameInfo>
			</GameInfo>
		</Card>
	);
}

export default GameCard;
