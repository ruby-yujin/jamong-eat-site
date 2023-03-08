import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <Logo to="">
        <img src="assets/img/logo_small.svg" alt="" />
      </Logo>
      <BtnWrap>
        <Btn to="/login">로그인</Btn>
        <Btn to="/register">회원가입</Btn>
      </BtnWrap>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 70px;
  border-bottom: 1px solid #ddd;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  img {
    width: 100px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 0 1.5rem;
`;

const Btn = styled(Link)`
  color: #444;
`;

export default Header;
