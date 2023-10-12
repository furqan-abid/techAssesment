import React from "react";
import styled from "styled-components";

const SubMenu = () => {
  return (
    <Main>
      <Container>
        <ul>
          <li>
            Pizza <span></span>
            <span></span>
          </li>
          <li>Sides</li>
          <li>Deserts</li>
          <li>Drinks</li>
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
  min-width:20em;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 20%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4vh;
      position: relative;
      color: red;
      :nth-child(1){
        ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        right: 0;
        background-color: rgb(27, 68, 96);
      }
      ::before{
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        border-bottom: 6px solid rgb(27, 68, 96);
        border-right: 3px solid transparent;
        border-left: 3px solid transparent;
      }
      }
    }
  }
`;
