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

function LoginPage() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Overlay>
         <FormWrapper>
             <h1>Log in</h1>
              <Input label={"E-mail"} setValue={setEmail} type={"email"}/>  
              <Input label={"Password"} setValue={setPassword} type={"password"}/>  
              <Button name={"Log in"} type={"submit"}/>
                 <Bar/>
                 or Sign Up
        </FormWrapper>   
      
        </Overlay>
    )
}

export default LoginPage
