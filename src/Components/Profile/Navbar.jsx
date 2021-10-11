/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
    list-style : none ;
    display : flex;
    gap : 2rem;
	width : 80%;
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

const FollowButton = styled.button`
	width : 5rem;
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

const StyledLi = styled.li`
	 margin-left: auto;
`;

function Navbar(props) {
	const {url, notUser, follow, isFollowed} = props;

	return (
		<Nav>
			<li>
				<StyledLink to={`${url}`}>Bio</StyledLink>
			</li>

			<li>
				<StyledLink  to={`${url}/Wishlist`}>Wishlist</StyledLink>
			</li>

			<li>
				<StyledLink  to={`${url}/Rated games`}>Rated Games</StyledLink>
			</li>

			<li>
				<StyledLink to={`${url}/Followers`}>Followers</StyledLink>
			</li>
			<StyledLi>
				{notUser && <FollowButton onClick={follow}> {isFollowed ? 'unfollow - ' : 'follow+'} </FollowButton>}
			</StyledLi>
		</Nav>
	);
}

export default Navbar;
