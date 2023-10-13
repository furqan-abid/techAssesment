import React, { useState } from "react";
import styled from "styled-components";

const ProgressBar = () => {

  const steps = [
    { label: "BASKET" },
    { label: "CHECKOUT" },
    { label: "CONFIRMATION" },
  ];

  const [activeOption, setActiveOption] = useState(0);

  const handleOptionActive = (index) => {
    setActiveOption(index);
  };

  return (
    <Main>
      <Container>
        {steps.map((step, index) => (
          <Step key={index} isActive={activeOption === index} isLast={index === steps.length - 1}>
            <span>{index + 1}</span><div></div>
            {step.label}
          </Step>
        ))}
      </Container>
    </Main>
  );
};

export default ProgressBar;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  background-color: rgb(226, 234, 238);
  font-size: clamp(0.5em,1vw,2em);
`;

const Container = styled.div`
  width: 40%;
  min-width: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Step = styled.p`
  width: 30%;
  height: 5vh;
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "red" : "lightGray")};
  span {
    padding: 2px 8px;
    border-radius: 50px;
    background-color: ${(props) => (props.isActive ? "red" : "lightGray")};
    color: white;
    margin-right: 5px;
  }
  div{
    position: absolute;
    right: 0;
    top: 30%;
    border: solid gray;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 7px;
    transform: rotate(-45deg);
    visibility: ${(props) => (props.isLast ? "hidden" : "visible")};
  }
  &::before {
    content: "";
    position: absolute;
    width: 60%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(27, 68, 96);
    display: ${(props) => (props.isActive ? "block" : "none")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 30%;
    border-bottom: 6px solid rgb(27, 68, 96);
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    display: ${(props) => (props.isActive ? "block" : "none")};
  }
`;
