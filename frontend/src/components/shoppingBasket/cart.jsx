import React from "react";
import styled from "styled-components";
import CartCard from "./cartCard";
let data = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
    labels: ["Vegetarian"],
    size: {
      name: "Medium",
      price: 12.99,
    },
  },
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic tomato and mozzarella cheese pizza with fresh basil leaves.",
    labels: ["Vegetarian"],
    size: {
      name: "Large",
      price: 15.99,
    },
  },
];
const Cart = () => {
  return (
    <Main>
      <Container>
        {
            data.map((item,index)=>(
                <CartCard key={index} data={item}/>
            ))
        }
        <Voucher>
          <InputSection>
            <input type="text" placeholder="Enter your voucher code..." />
            <button>Apply</button>
          </InputSection>
          <PriceSection>
            <span>Total</span> <del>23.99</del>
            <p>$11.99</p>
          </PriceSection>
        </Voucher>
      </Container>
    </Main>
  );
};

export default Cart;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1em;
`;

const Voucher = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 7vh;
  background-color: rgb(244, 244, 244);
  padding: 1em;
  margin-top: 1em;
`;

const InputSection = styled.div`
  /* width: 25%; */
  min-width: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0em;
  input{
    padding: 1vw;
    border: 1px solid gray;
    width: 15vw;
    min-width: 10em;
  }
  button{
    padding: 1vw 2.5vw;
    border-radius: 50px;
    outline: none;
    border: none;
    background-color: rgb(41, 98, 141);
    color: white;
    margin-left: 0.5em;
  }
`;

const PriceSection = styled.div`
  /* width: 12%; */
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  span {
    color: gray;
    margin-right: 0.5em;
  }
  del {
    color: red;
    font-size: clamp(0.5em, 0.5vw, 2em);
    margin-right: 0.5em;
  }
  p {
    font-size: clamp(0.5em, 1vw, 2em);
  }
`;
