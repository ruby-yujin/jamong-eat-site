import React from "react";
import styled from "styled-components";
import {
  LoginFormWrap,
  FormWrap,
  FormGroup,
  FormLabel,
  FormInput,
  BtnSubmit,
} from "../../login/components/LoginForm";

function RegisterForm() {
  return (
    <RegisterFormWrap>
      <h1>회원가입</h1>
      <FormWrap>
        <FormGroup>
          <FormLabel htmlFor="">이메일</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="">비밀번호</FormLabel>
          <FormInput type="password" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="">비밀번호 확인</FormLabel>
          <FormInput type="password" />
        </FormGroup>
        <BtnSubmit>회원가입하기</BtnSubmit>
      </FormWrap>
    </RegisterFormWrap>
  );
}

const RegisterFormWrap = styled(LoginFormWrap)``;

export default RegisterForm;
