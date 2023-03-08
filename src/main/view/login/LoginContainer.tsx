import React from "react";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";

function LoginContainer() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div``;

export default LoginContainer;
