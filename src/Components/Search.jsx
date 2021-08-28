import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const StyledIcon = styled(FontAwesomeIcon)`
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: ${props => props.theme.colors.primaryGreen};
    text-align: center;
    font-size: ${props => props.theme.fontSizes.medium};
    transition: all 1s;
    @media only screen and (max-width: 600px){
        height: 20px;
        width: 20x;
        padding: 5px;
        font-size: ${props => props.theme.fontSizes.small};
    }
`;


const StyledForm = styled.form`
    transform: translate(-30%,0%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
    &:hover{
        width: 200px;
        cursor: pointer;
    }
    &:hover input{
        display: block;
    }
    &:hover ${StyledIcon}{
        background: #07051a;
        color: ${props=> props.theme.colors.backgroundGrey}
    }
    @media only screen and (max-width: 600px){
        height: 25px;
        width: 25px;
        &:hover{
        width: 70px;
        
    }
}
`;

const StyledInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
    @media only screen and (max-width: 600px){
        height: 20px;
        line-height: 15px;
        padding: 0 10px;
        font-size: ${props => props.theme.fontSizes.small};
        
    }
`;



function Search() {
	return (
		<div> 
			<StyledForm>
				<StyledInput type="search"/>
				<StyledIcon icon={faSearch}/>
			</StyledForm>
		</div>
	);
}

export  default Search;
