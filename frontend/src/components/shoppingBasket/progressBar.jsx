import React from "react";
import styled from "styled-components";

const ProgressBar = () => {
  const steps = [
    { label: "BASKET" },
    { label: "CHECKOUT" },
    { label: "CONFIRMATION" },
  ];

  return (
    <Main>
      <Container>
        {steps.map((step, index) => (
          <Step key={index} isLast={index === steps.length - 1} isFirst={index === 0}>
            <span>{index + 1}</span>
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
  height: 4vh;
  background-color: rgb(226, 234, 238);
`;

const Container = styled.div`
  width: 40%;
  min-width: 20em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Step = styled.p`
  width: 30%;
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isFirst ? "red" : "lightGray")};
  span {
    padding: 2px 8px;
    border-radius: 50px;
    background-color: ${(props) => (props.isFirst ? "red" : "lightGray")};
    color: white;
    margin-right: 5px;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 10%;
    border: solid gray;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 7px;
    transform: rotate(-45deg);
    visibility: ${(props) => (props.isLast ? "hidden" : "visible")};
  }
`;
