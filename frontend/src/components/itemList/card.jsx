import React from "react";
import styled from "styled-components";
import pizza from "../../assets/pizza.png";

const Card = ({data}) => {
  return (
    <Main>
      <Img>
        <img src={pizza} alt="pizza" />
      </Img>
      <Heading>
        <h3>
          {data.name}
        </h3>
        <p>
          2461kcal | Serves 3-4
        </p>
      </Heading>
      <DropDown>
        <select name="pizza" id="pizza">
          {
            data?.sizes?.map((pizza)=>(
              <option value={pizza.name}>{pizza.name}</option>
            ))
          }
        </select>
      </DropDown>
      <Coustomize>
        <h3>
          Coustomize
        </h3>
        <p>+</p>
        <Sphere>
        </Sphere>
      </Coustomize>
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
  height: 20%;
  width: 100%;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Heading = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
min-height: 2.5em;
padding: 0 1em;
h3{
  font-size: clamp(0.7em,1vw,2em);
}
p{
  font-size: clamp(0.5em,0.8em,1.5em);
  color: gray;
}

`;


const DropDown = styled.div`
margin: 0 1em;
border: 1px solid gray;
padding-right: 1em;
border-radius: 5px;
overflow: hidden;

select{
  padding: 0.5em;
  border: none;
  outline: none;
  width: 100%;
}
`;

const Coustomize = styled.div`
display: flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
position: relative;
overflow: hidden;
h3{
  color: rgb(45, 101, 145);
  padding: 1em;
}
p{
  color: white;
  font-size: 2em;
  z-index: 10;
  position: absolute;
  right: 0.2em;
  bottom: 0.2em;
  cursor: pointer;
}
`;


const Sphere = styled.div`
  position: absolute;
  background-color: rgb(95, 167, 70);
  width: 3em;
  height: 3em;
  font-size: 2em;
  border-radius: 1.5em;
  bottom: -75%;
  right: -20%;
`