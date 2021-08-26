/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotateY = keyframes`
     0% {
        transform: rotateY(90deg)
    }
    80% {
        transform: rotateY(-10deg)
    }
    100% {
        transform: rotateY(0)
    }

`;
const Pop = styled.div.attrs(props => ({
	style: {
		display : props.error ? 'flex' : 'none', 
	},
}))`
     background-color : red ;
     position: fixed;  
     top : 0;
     left: 0;
     right: 0;
     margin: 5% auto; 
    justify-content :center;
    width: 500px; 
    height: 2rem ; 
    border-radius : 35px;
    z-index: 1; 
    animation-name: ${rotateY};
  animation-duration: 0.8s;
    cursor: pointer; 
  `; 

function Popup(props) {
	const { errorMsg, error } = props;
	return (
		<Pop error={error} errorMsg={errorMsg}>
			{errorMsg}
		</Pop>
	);
}

export default Popup;
