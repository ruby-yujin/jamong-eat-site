import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <LoginFormWrap>
      <h1>로그인</h1>
      <FormWrap>
        <FormGroup>
          <FormLabel htmlFor="">이메일</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="">비밀번호</FormLabel>
          <FormInput type="password" />
        </FormGroup>
        <BtnSubmit>로그인하기</BtnSubmit>
      </FormWrap>
    </LoginFormWrap>
  );
}

const LoginFormWrap = styled.div`
  width: 60%;
  margin: 4rem auto 0;
  h1 {
    text-align: center;
    font-size: 2.2rem;
    color: #f06449;
  }
`;

const FormWrap = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin: 0.4rem 0;
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
`;

const BtnSubmit = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.4rem;
  background: #f06449;
  color: #fff;
  margin-top: 2rem;
`;

export default LoginForm;
