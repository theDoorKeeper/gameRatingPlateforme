/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CoverPhoto = styled.div`
	width : 100%;
	height : 50%;
	background-color : blue;
    background-image : ${props=> props.image};
`;

function Cover(props) {
	const {coverPicture} = props;
	return (
		<CoverPhoto image = {coverPicture}/> 
	);
}

export default Cover;
