import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/dominos.png'
const Nav = () => {
  return (
    <Main>
        <Logo>
            <img src={logo} alt="logo" />
        </Logo>
        <Login>
            Register | Log In
        </Login>
    </Main>
  )
}

export default Nav

const Main = styled.div`
    height: 13vh;
    width: 100vw;
    background-color: rgb(38,38,38);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Logo = styled.div`
    width: 10em;
    height: 80%;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const Login = styled.div`
color: white;
position: absolute;
top: 4vh;
right: 10vw;
font-size: clamp(0.7em,1vw,2em);
`