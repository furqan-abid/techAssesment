import React from 'react'
import styled from 'styled-components'
import Card from './card'
let data = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
        labels: ["Vegetarian"],
        sizes: [
          {
            name: "Small",
            price: 9.99
          },
          {
            name: "Medium",
            price: 12.99
          },
          {
            name: "Large",
            price: 15.99
          }
        ]
      },
]
const Items = () => {
  return (
    <Main>
        <Container>
            {
                data?.map((ls)=>(
                    <Card key={ls} data={ls}/>
                ))
            }
        </Container>
    </Main>
  )
}

export default Items

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`
const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`