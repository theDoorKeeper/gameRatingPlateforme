import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import Overlay from './Overlay'

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

    const handleClick = ()=>{   
        setOverlayState(false);
        setloginOverlay(true);
    }


    return (
        <Overlay visible={overlayState} setVisible={setOverlayState}>
         <FormWrapper>
             <h1>Sign up</h1>
              <Input label={"Name"} setValue={setName} type={"text"}/>  
              <Input label={"E-mail"} setValue={setEmail} type={"email"}/>  
              <Input label={"Password"} setValue={setPassword} type={"password"}/>  
              <Input label={"Repeat Password"} setValue={setRepeatPassword} type={"password"}/> 
              <Button name={"Sign Up"} type={"submit"}/>
                 <Bar/>
                 Already have an account? <Login onClick={handleClick}> Login </Login> 
        </FormWrapper>   
      
        </Overlay>
    )
}

export default SignUpPage