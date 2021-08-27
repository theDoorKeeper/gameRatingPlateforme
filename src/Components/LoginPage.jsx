/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fadeAway } from '../helperFunctions/helper';
import { useAuth } from './AuthProvider';
import Button from './Button';
import Input from './Input';
import Overlay from './Overlay';
import Popup from './PopUp';

const FormWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center ;
    height : 55vh;
    width : 50vh;
    background-color  : ${props => props.theme.colors.backgroundGray};
    color : ${props => props.theme.colors.white};
    gap : 1rem ;
    margin-left : auto;
    margin-right : auto;
    margin-top : 20vh;
`;

const Bar = styled.span`
 width : 90%;
 height : 1px;
 border-bottom : 1px solid ${props=>props.theme.colors.backgroundBlack} ;

`;
const SignUp = styled.h4`
cursor : pointer;
&:hover{
    color : ${props => props.theme.colors.primaryGreen}
}
`;

function LoginPage(props) {
	const {overlayState, setOverlayState, setSingUpOverlay} = props;
	const {login, currentUser} = useAuth();
	
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [errorMsg, setErrorMsg] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	
	const handleClick = () =>{
		setOverlayState(false);
		setSingUpOverlay(true);
	};

	const handleErrors = (errormsg)=>{
		setErrorMsg(errormsg);
		setError(true);
		fadeAway(setError);
	};

	useEffect(() => {
		if(currentUser){
			setOverlayState(false);
		}
	}, [currentUser]);

	return (
		<Overlay visible={overlayState} setVisible={setOverlayState}>
			<FormWrapper>
				<h1>Log in</h1>
				<Popup error={error} errorMsg={errorMsg}/>
				<Input label={'E-mail'} setValue={setEmail} type={'email'}/>  
				<Input label={'Password'} setValue={setPassword} type={'password'}/>  
				<Button name={'Log in'} type={'submit'}/>
				<Bar/>
                 dont have an Account? <SignUp onClick={handleClick}> Sign Up </SignUp> 
			</FormWrapper>   
      
		</Overlay>
	);
}

export default LoginPage;
