import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <Email>support@jamongfood.com</Email>
      <Copyright>ⓒ 2023. JamongFood All rights reserved.</Copyright>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  border: 1px solid #ddd;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d4d5d4;
`;

const Email = styled.p`
  color: #333;
  font-size: 1rem;
`;

const Copyright = styled.address`
  color: #333;
  font-size: 1rem;
`;

export default Footer;
