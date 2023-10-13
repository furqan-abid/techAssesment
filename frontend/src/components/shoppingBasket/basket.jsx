import React from 'react'
import styled from 'styled-components'
import basket from '../../assets/basket.png'


const Basket = () => {
  return (
    <Main>
        <Container>
        <Img>
        <img src={basket} alt="basket" />
        </Img>
        <Text>
            You have 1 item on a collection order
        </Text>
        </Container>
    </Main>
  )
}

export default Basket

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const Container = styled.div`
margin-top: 1em;
    width: 20%;
    min-width: 10em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;

`

const Img = styled.div`
    width: 60%;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

`

const Text = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: clamp(0.5em,1vw,2em);
margin-top: 0.5em;
`