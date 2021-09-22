/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const Wrapper = styled.div`
	position : relative;
	width : 30rem;
	height : 20rem;
	display : flex;
	justify-content : center;
	gap : 2rem;
	left : 15%;
	z-index : 2;
`;

const GamePicture = styled.img`
	width : 25rem ;
	height :15rem ;
	margin-top : 25%;
	margin-left :-65%;
	border : 3px solid transparent;
	&:hover{
		border : 3px solid ${props => props.theme.colors.primaryGreen};
		cursor : pointer;
	}
`;

const CoverPicture = styled.div`
	width : 100%;
	height : 50%;
	background : url(${props=> props.image}) no-repeat center center fixed;
	background-color : ${props => props.theme.colors.backgroundGray};
	background-size : cover;
	&::before{
		content: "";
    position: absolute;
    width : 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
		filter : blur(10px);
	}
`;

const TitleWrapper = styled.div`
display : flex;
flex-direction: column;
align-self : flex-end;
background : ${props => props.theme.colors.transparentBlack};
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
	margin-left : 35rem;
	display : flex;
`;

const GameDetailsCard = styled.div`
	width : 50%;
	min-height : 30rem;
	background-color : ${props => props.theme.colors.grey};	
	border-radius: 0px 25px 0px 25px; /*TL TR BR BL*/
`;

const GameRatingCard = styled.div`
	width : 25%;
	background-color:yellow;
	border-radius: 25px 0px 25px 0px; /*TL TR BR BL*/

`;
const Bar = styled.hr`
    width : 80%;
    height : 1px; 
    border-width : 0;
    background-color : ${props => props.theme.colors.lightGray};
  `;

function Game() {
	const { name } = useParams();

	const [exists, setExists] = useState(true);
	const [gameData, setgameData] = useState(null);

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
				setgameData(response.data);
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
		<>

			<CoverPicture image ={gameData && gameData.background_image}> 
				<Wrapper>
					<GamePicture src = {gameData && gameData.background_image_additional}/>
					<TitleWrapper>
						<div> {gameData && gameData.name} </div>
						<div> Studio : {gameData && gameData.developers.map((developer,i) => developer.name )} </div>
						<div> {gameData && gameData.released} </div>
					</TitleWrapper>
				</Wrapper>
			</CoverPicture>
			<Content>
				<GameDetailsCard> 
					<h3>Genres : <>{ gameData && gameData.genres.map((genre,i) => genre.name +' ' )}</></h3>
					<h3>Platfroms : <>{ gameData && gameData.platforms.map((platform,i) => platform.platform.name +', ' )}</></h3>
					{ gameData && gameData.description_raw}
					<Bar/>
					<h3>Avaible on : <>{ gameData && gameData.stores.map((store,i) => store.store.name +' ' )}</></h3>
					<h5 style={{color:'grey'}}>Tags: <>{ gameData && gameData.tags.map((tag,i) => tag.name +' ' )}</></h5>
				</GameDetailsCard>
				<GameRatingCard/>
			</Content>
		
		</>
	);
}

export default Game;
