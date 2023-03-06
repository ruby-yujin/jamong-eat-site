import styled from "styled-components";
import Visual from "./components/Visual";
import WhatDoWant from "./components/WhatDoWant";

function MainContainer() {
  return (
    <Container>
      <Visual />
      <WhatDoWant />
    </Container>
  );
}

const Container = styled.div``;

export default MainContainer;
