/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position:relative; 
  margin-bottom:45px; 
  width:90%;
  height: 3vh;
  display : flex;
  flex-direction: column;
`;
const inputHighlighter = keyframes`
 from { background:${props => props.theme.colors.primaryGreen}; }
  to  { width:0; background:transparent; }
`;


const StyledInput = styled.input`
      font-size:18px;
      color : ${props => props.theme.colors.white};
      padding:10px 10px 10px 5px;
      display:block;
      border:none;
      background-color : ${props => props.theme.colors.backgroundGray};
      border-bottom:2px solid ${props => props.theme.colors.lightGrey};
      &:focus{
        outline:none;
      }
      &:focus ~ .bar:before, &:focus ~ .bar::after{
        width:50%;
      }

      &:focus ~ label, &:valid ~ label{
        top:-20px;
        font-size:14px;
        color:${props => props.theme.colors.primaryGreen};
      }

      &:focus ~ .highlight{
        animation:${inputHighlighter} 0.3s ease;
      }
`;
const StyledLabel = styled.label`
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;

`;


const Bar = styled.span`
 position:relative;
 display:block; 
 width:315px;
&::before , ::after{
    content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:${props => props.theme.colors.primaryGreen}; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all; 
}
&::before{
    left:50%;
}

&::after{
    right:50%;
}

`;

const Highlight = styled.span`
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
`;





function Input(props) {
	const {type, label, setValue} = props;

	const onChange = (e) => {
		setValue(e.target.value);
	};


	return (
		<Wrapper>  
			<StyledInput type={type} required onChange={onChange} />
			<Highlight className="highlight"/>
			<Bar className="bar"/>
			<StyledLabel>{label}</StyledLabel>
		</Wrapper>
	);
}

export default Input;
