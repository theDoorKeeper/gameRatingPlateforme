/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    height : 3rem;
    width : 6rem;
    border : none ;
    background : ${props => props.theme.colors.backgroundBlack};
    color : ${props => props.theme.colors.white};
    cursor : pointer;
    &:hover{
     border : 1px solid ${props => props.theme.colors.primaryGreen};
     color : ${props => props.theme.colors.primaryGreen};
    }
    &:disabled{
        color : ${props => props.theme.colors.lightGrey};
        background : ${props => props.theme.colors.backgroundGray};
        &:hover{
     border : none;
     color : ${props => props.theme.colors.lightGrey};
    }
    }

`;


function Button(props) {
	const {name, type, onClick,disabled} = props;
	return (
		<StyledButton type={type} onClick={onClick} disabled={disabled}>
			{name}
		</StyledButton>
	);
}

export default Button;
