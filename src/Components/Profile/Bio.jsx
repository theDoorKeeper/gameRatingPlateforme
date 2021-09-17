/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width : 100%;
    display:flex;
    flex-direction : column;
    justify-content : left;
    color : white;
`;
const Stats = styled.div`
    display : flex;
    gap : 3rem ;
    width : 30%;
    align-self : center;
    justify-content : center;

`;

const StatWrapper = styled.div`
    display:flex;
    flex-direction : column;
    justify-content : center;
`;

const StatNumber = styled.p`
  padding: 0px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.primaryGreen};
`;

const StatDesc = styled.p`
  margin-top: -15px;
  font-size: ${props => props.theme.fontSizes.small};
  color: #bbb;
  
  `;

const Bar = styled.hr`
    width : 100%;
    height : 2px; 
    border-width : 0;
    background-color : ${props => props.theme.colors.lightGray};
  `;

const BioDesc = styled.p`
  text-align: center;
  margin-top: 25px;
  margin: 25px 40px;
  color: #999;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: "Open Sans";
  padding-bottom: 25px;
  min-height: 4.1rem;
  overflow : hidden;
  display : flex;
  flex-direction : column;
  `;

 const EditBio = styled.button`
  height : fit-content;
  width : fit-content;
  border : none;
  background : ${props => props.theme.colors.transparentBlack};
  font-size : ${props => props.theme.fontSizes.medium};
  font-weight : bold;
  cursor : pointer;
  &:hover{
    color : ${props => props.theme.colors.primaryGreen};
  }
 `;
function Bio(props) {
	const {user} = props;
  const [overlayVisible, setOverlayVisible] = useState(false);


	return (
		<Container>

			<Stats>
				<StatWrapper>
					<StatNumber> { user.followers ? user.followers.length : 0 }</StatNumber>
					<StatDesc>Followers</StatDesc>
				</StatWrapper>

				<StatWrapper>
					<StatNumber> { user.lists ? user.lists.length : 0 }</StatNumber>
					<StatDesc>Lists</StatDesc>
				</StatWrapper>

				<StatWrapper>
					<StatNumber>{ user.wishList ? user.wishList.length : 0 }</StatNumber>
					<StatDesc>Wished games</StatDesc>
				</StatWrapper>
			</Stats>

			<Bar/>
 <EditBio> edit bio </EditBio>
			<BioDesc>
       
				{user.bio ? user.bio : 'He should be your Bio.'}

			</BioDesc>


		</Container>
	);
}

export default Bio;
