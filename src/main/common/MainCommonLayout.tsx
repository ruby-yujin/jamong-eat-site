import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../pages/Main";
import Router from "../routers/Router";

interface Props {
  children: ReactNode;
}

function MainCommonLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>
        <Router />
      </Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Content = styled.div`
  height: calc(100% - 150px);
  border: 1px solid red;
`;

export default MainCommonLayout;
