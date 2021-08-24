import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  position: fixed;
  display: ${props => props.visible ? "none" : "block" } ;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
`

function Overlay(props) {
    const {visible, setVisible, children} = props;


    const handleClick = e =>{
        if (e.target === e.currentTarget ){
            setVisible(true)
        }
    }

    return (
        <Wrapper visible={visible} onClick={handleClick}>
            {children}
        </Wrapper>
    )
}

export default Overlay
