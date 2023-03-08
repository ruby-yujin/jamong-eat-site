import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <BannerWrap>
      <Item style={{ background: "orange" }}></Item>
      <Item style={{ background: "green" }}></Item>
    </BannerWrap>
  );
}

const BannerWrap = styled.div`
  display: flex;
`;

const Item = styled.div`
  width: 50%;
  height: 400px;
`;

export default Banner;
