/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const ListWrapper = styled.div`
	padding-top : 2rem;
	width : 100%;
	gap : 15px;
	display : flex;
	flex-wrap : wrap;
	justify-content : center; 
`;
function GameList(props) {
	const {list} = props;
	const [array, setArray] = useState([]);

	useEffect(() => {
		list &&  setArray( list.map( user => <UserCard  title={user.name} image={user.picture} key={user.uid} /> ) );
	}, [list]);

	return (

		<ListWrapper>
			{array}
		</ListWrapper> 

	);
}

export default GameList;