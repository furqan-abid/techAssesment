import React from 'react'
import styled from 'styled-components'
import Nav from './nav'
import NavMenu from './navMenu'
const Header = () => {
  return (
    <Main>
        <Nav/>
        <NavMenu/>
    </Main>
  )
}

export default Header

const Main = styled.nav`
  display: flex;
  flex-direction: column;

`
