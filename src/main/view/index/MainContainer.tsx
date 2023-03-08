import styled from "styled-components";
import Banner from "./components/Banner";
import Visual from "./components/Visual";
import WhatDoWant from "./components/WhatDoWant";

function MainContainer() {
  return (
    <Container>
      <Visual />
      <WhatDoWant />
      <Banner />
    </Container>
  );
}

const Container = styled.div``;

export default MainContainer;
