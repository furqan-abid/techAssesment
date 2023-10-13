import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Main>
        Page Not Found
    </Main>
  )
}

export default NotFound

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80vh;
    font-size: 3vw;
    color: red;
`