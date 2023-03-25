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

const Container = styled.div``;

const Content = styled.div`
  height: calc(100% - 150px);
`;

export default MainCommonLayout;
