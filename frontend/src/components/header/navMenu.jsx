import React from "react";
import styled from "styled-components";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Main>
      <Container>
        <Collection>
          <CollectionsIcon sx={{ fontSize: "1em" }} />
          <h4>Collection</h4>
          <p>Milton Kyenas-Wolver</p>
        </Collection>
        <Options>
          <div>
            <NavLink to="/">
              <span>Menu</span>
            </NavLink>
            <NavLink to="/deal">
              <span>Deals</span>
            </NavLink>
          </div>
        </Options>
        <Link to='/cart'>
        <Basket>
          <ShoppingBagIcon sx={{ fontSize: "1em" }} />
          <h4>Basket</h4>
          <p>$ 0.00</p>
        </Basket>
        </Link>
      </Container>
    </Main>
  );
};

export default NavMenu;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 60%;
  flex-wrap: wrap;
`;
const Collection = styled.div`
  width: 30%;
  min-width: 10em;
  border-radius: 20px;
  background-color: rgb(41, 98, 141);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.4em 0.5em;
  margin: 0.5em;
  h4 {
    font-size: clamp(0.5em, 1vw, 2em);
  }
  p {
    background-color: rgb(27, 68, 96);
    font-size: clamp(0.5em, 0.8vw, 1.8em);
    padding: 0.4em 0.5em;
    border-radius: 20px;
  }
`;

const Options = styled.div`
  width: 30%;
  min-width: 10em;
  font-size: clamp(1em, 1.5vw, 2em);
  font-weight: bolder;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      text-decoration: none;
      color: black;
      position: relative;
      height: 7vh;
      &.active::before {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 50%;
        border-bottom: 6px solid rgb(27, 68, 96);
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
      }
      &.active::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        right: 0;
        background-color: rgb(27, 68, 96);
      }
    }

    .active {
      color: red;
    }
  }
`;

const Basket = styled.div`
  width: 20%;
  min-width: 15em;
  border-radius: 20px;
  background-color: rgb(95, 167, 70);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.4em 0.5em;
  margin: 0.5em;
  h4 {
    font-size: clamp(0.5em, 1vw, 2em);
  }
  p {
    background-color: rgb(86, 145, 66);
    font-size: clamp(0.5em, 0.8vw, 1.8em);
    padding: 0.4em 0.5em;
    border-radius: 20px;
  }
`;
