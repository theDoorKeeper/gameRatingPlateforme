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

`;


function Button(props) {
	const {name, type, onClick} = props;
	return (
		<StyledButton type={type} onClick={onClick}>
			{name}
		</StyledButton>
	);
}

export default Button;
