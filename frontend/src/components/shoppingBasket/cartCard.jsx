import React from "react";
import styled from "styled-components";
import pizza from "../../assets/pizza.png";

const CartCard = ({ data }) => {
  return (
    <Main>
      <Info>
        <h4>{data.description}</h4>
        <span>$ {data.size.price}</span>
      </Info>
      <Card>
        <Section1>
          <Img>
            <img src={pizza} alt="pizza" />
          </Img>
          <Heading>
            <h4>{data.name}</h4>
            <p>{data.size.name}</p>
          </Heading>
        </Section1>
        <Section2>
          <Button>
            <button>Remove</button>
            <button>Edit</button>
          </Button>
        </Section2>
        <Sphere><span>+</span></Sphere>
      </Card>
    </Main>
  );
};

export default CartCard;

const Main = styled.div`
  min-height: 20vh;
  background-color: rgb(226, 234, 238);
  margin-top: 1em;
  /* min-width: 15em; */
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  h4{
    width: 80%;
    font-size: clamp(0.8em, 1vw, 2em);
  }
  span{
    font-size: clamp(0.5em, 1vw, 2em);
  }
`;

const Card = styled.div`
  height: 80%;
  background-color: white;
  min-height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  margin-top: 1em;
`;
const Section1 = styled.div`
  width: 40%;
  /* min-width: 10em; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Img = styled.div`
  width:60%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
  }
`;

const Heading = styled.div`
  padding: 1em;
  h4 {
    margin: 1em 0;
    font-size: clamp(0.8em, 0.8vw, 2em);
  }
  p {
    font-size: clamp(0.8em, 0.8vw, 2em);
  }
`;

const Section2 = styled.div`
  width: 50%;
  height: 100%;
  /* min-width: 10em; */
`;

const Button = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  button{
    border: none;
    background-color: transparent;
    color:rgb(41, 98, 141) ;
  }
`;

const Sphere = styled.div`
  position: absolute;
  width: 5em;
  height: 5em;
  border-radius: 2.5em;
  bottom: -25px;
  right: -30px;
  background-color: rgb(95, 167, 70);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
span{
  color: white;
  font-size: clamp(2em, 2vw, 2em);
margin: 10px 0 0 20px;
}
`;
