import React from "react";
import styled from "styled-components";
import { useGetAllItemsQuery } from "../../features/cartSlice";
import Card from "./card";

const Items = () => {
  
  const { data: items, isLoading } = useGetAllItemsQuery();
  console.log("this is item", items);

  return (
    <Main>
      <Container>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          items?.map((ls) => <Card key={ls} data={ls} />)
        )}
      </Container>
    </Main>
  );
};

export default Items;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
