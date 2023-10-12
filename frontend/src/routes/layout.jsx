import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <Main>
      <Header/>
      <Container>
        <Outlet />
      </Container>
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div``;
