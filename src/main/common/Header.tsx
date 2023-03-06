import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <Logo to="">
        <img src="assets/img/logo_small.svg" alt="" />
      </Logo>
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

export default Header;
