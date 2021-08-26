import React, { useState } from 'react'
import styled from 'styled-components'
import { fadeAway } from '../helperFunctions/helper'
import Button from './Button'
import Input from './Input'
import Overlay from './Overlay'
import Popup from './PopUp'

const FormWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center ;
    height : 70vh;
    width : 50vh;
    background-color  : ${props => props.theme.colors.backgroundGray};
    color : ${props => props.theme.colors.white};
    gap : 1rem ;
    margin-left : auto;
    margin-right : auto;
    margin-top : 20vh;
`

const Bar = styled.span`
 width : 90%;
 height : 1px;
 border-bottom : 1px solid ${props=>props.theme.colors.backgroundBlack} ;

`
const Login = styled.h4`
cursor : pointer;
&:hover{
    color : ${props => props.theme.colors.primaryGreen}
}
`

function SignUpPage(props) {
    const {overlayState, setOverlayState, setloginOverlay} = props;

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [name, setName] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [error, setError] = useState(false);

    const handleClick = ()=>{   
        setOverlayState(false);
        setloginOverlay(true);
    }

    const handleErrors = (errormsg)=>{
            setErrorMsg(errormsg);
            setError(true);
            fadeAway(setError);
    }

    const submitClick = ()=>{
        if(password!==repeatPassword){
            handleErrors("Passwords dont match !")
            return 
        }

          setEmail(null);
          setPassword(null);
          setRepeatPassword(null);
          setName(null);

        
    }

    return (
        <Overlay visible={overlayState} setVisible={setOverlayState}>
         <FormWrapper>
             <h1>Sign up</h1>
             <Popup error={error} errorMsg={errorMsg}/>
              <Input label={"Name"} setValue={setName} type={"text"}/>  
              <Input label={"E-mail"} setValue={setEmail} type={"email"}/>  
              <Input label={"Password"} setValue={setPassword} type={"password"}/>  
              <Input label={"Repeat Password"} setValue={setRepeatPassword} type={"password"}/> 
              <Button name={"Sign Up"} type={"submit"} onClick={submitClick}/>
                 <Bar/>
                 Already have an account? <Login onClick={handleClick}> Login </Login> 
        </FormWrapper>   
      
        </Overlay>
    )
}

export default SignUpPage