import React from "react";
import styled from "styled-components";
import pizza from "../../assets/pizza.png";

const Card = () => {
  return (
    <Main>
      <Img>
        <img src={pizza} alt="pizza" />
      </Img>
      <Heading>

      </Heading>
      <Detail></Detail>
      <DropDown></DropDown>
      <Coustomize></Coustomize>
    </Main>
  );
};

export default Card;

const Main = styled.div`
  width: 20%;
  min-width: 15em;
  margin: 1em;
  min-height: 23em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 1px 10px #b2b0b0;
  background-color: white;
`;

const Img = styled.div`
  height: 50%;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Heading = styled.div``;

const Detail = styled.div``;

const DropDown = styled.div``;

const Coustomize = styled.div``;
