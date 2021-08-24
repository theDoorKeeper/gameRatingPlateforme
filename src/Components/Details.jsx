import React from 'react'
import styled, { keyframes } from 'styled-components'
import backgroundImg from '../assets/gameBackground.png'

const BackGround = styled.div`
    background-size: 100% auto ;
    background-repeat : no-repeat;
    background-image : url(${backgroundImg});
    margin-left : auto;
    margin-right : auto;
    height : 80vh;
    width :80%;
    margin-top : -10rem;
    @media (max-width: 768px) {
        margin-top : -3rem;
        background-size: 100% 100% ;
        height : 60vh;
        width :100%;
  }
`
const floating = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }    

`

const Description = styled.div`
    width : 80%;
    margin : auto ;
    color : ${props => props.theme.colors.white};
    text-align : center;
    font-size : ${props=>props.theme.fontSizes.large};
    margin-top : 3rem;
    animation-name: ${floating};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    &:hover{
        color : ${props => props.theme.colors.primaryGreen};
    }
    @media (max-width: 768px) {
        font-size : ${props=>props.theme.fontSizes.small};
        margin-top : 0.5rem;
  }

`

function Details() {
    return (
        <>
            <BackGround/>
            <Description>Rate your games and share your reviews with your friends !</Description>    
        </>
    )
}

export default Details
