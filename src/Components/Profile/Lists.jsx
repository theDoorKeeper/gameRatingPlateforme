import React from 'react';
import styled from 'styled-components';

const WishedWrapper = styled.div`
	width : 100%;
	gap : 5px;
	display : flex;
	flex-wrap : wrap;
	justify-content : center; 
`;

function Lists() {
	return (
		<div>
			Wished games :
			<WishedWrapper>
			</WishedWrapper> 
		</div>
	);
}

export default Lists;
