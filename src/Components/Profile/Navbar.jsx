/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
    list-style : none ;
    display : flex;
    gap : 2rem;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color : white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &.active{
        border-bottom : ${props=>props.theme.colors.primaryGreen} 2px solid;
    }

`;

function Navbar(props) {
	const {url} = props;

	return (
		<Nav>
			<li>
				<StyledLink to={`${url}`}>Bio</StyledLink>
			</li>

			<li>
				<StyledLink  to={`${url}/Lists`}>Lists</StyledLink>
			</li>

			<li>
				<StyledLink to={`${url}/Followers`}>Followers</StyledLink>
			</li>
		</Nav>
	);
}

export default Navbar;
