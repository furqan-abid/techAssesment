import React, { useState } from "react";
import styled from "styled-components";

const SubMenu = () => {
  const options = [
    { label: "Pizza" },
    { label: "Sides" },
    { label: "Deserts" },
    { label: "Drinks" },
  ];

  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <Main>
      <Container>
        <ul>
          {options.map((opt, index) => {
            return (
              <Option
                key={index}
                onClick={() => handleOptionClick(index)}
                isActive={activeOption === index}
              >
                {opt.label}
              </Option>
            );
          })}
        </ul>
      </Container>
    </Main>
  );
};

export default SubMenu;

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
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Option = styled.li`
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  position: relative;
  color: ${(props) => (props.isActive ? "red" : "Gray")};
  cursor: pointer;

  &.active {
    color: red;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    right: 0;
    background-color: rgb(27, 68, 96);
    display: ${(props) => (props.isActive ? "block" : "none")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    border-bottom: 6px solid rgb(27, 68, 96);
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    display: ${(props) => (props.isActive ? "block" : "none")};
  }
`;
