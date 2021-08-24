import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import Overlay from './Overlay'

const FormWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center ;
    height : 50vh;
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
const SignUp = styled.h4`
cursor : pointer;
&:hover{
    color : ${props => props.theme.colors.primaryGreen}
}
`

function LoginPage(props) {
    const {overlayState, setOverlayState, setSingUpOverlay} = props;

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const handleClick = ()=>{
        setOverlayState(false);
        setSingUpOverlay(true);
    }

    return (
        <Overlay visible={overlayState} setVisible={setOverlayState}>
         <FormWrapper>
             <h1>Log in</h1>
              <Input label={"E-mail"} setValue={setEmail} type={"email"}/>  
              <Input label={"Password"} setValue={setPassword} type={"password"}/>  
              <Button name={"Log in"} type={"submit"}/>
                 <Bar/>
                 don't have an Account? <SignUp onClick={handleClick}> Sign Up </SignUp> 
        </FormWrapper>   
      
        </Overlay>
    )
}

export default LoginPage
