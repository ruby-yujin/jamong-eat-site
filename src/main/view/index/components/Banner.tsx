import React from "react";
import styled from "styled-components";

const ItemImgList = [
  {
    id: 1,
    title: "정갈하고 깔끔한 일식",
    description: "숙성이 잘된 쫄깃한 식감",
    src: "assets/img/main/banner_01.jpg",
    label: "일식 대표 이미지",
  },
  {
    id: 2,
    title: "음,, 뭐라쓰지 추천받아요",
    description: "신선한 재료를 이용한 ㅇㅇㅇㅇ",
    src: "assets/img/main/banner_02.jpg",
    label: "동남아식 대표 이미지",
  },
];

function Banner(): JSX.Element {
  return (
    <BannerWrap>
      {ItemImgList.map((item) => {
        return (
          <Item key={item.id}>
            <Dim>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </Dim>
            <ItemImg src={item.src} alt={item.label} />
          </Item>
        );
      })}
    </BannerWrap>
  );
}

const BannerWrap = styled.div`
  display: flex;
`;

const Item = styled.div`
  width: 50%;
  height: 400px;
  overflow: hidden;
  position: relative;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(1, 1, 1, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    display: block;
    color: #fff;
    font-size: 2rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #ddd;
  }
`;

const ItemImg = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
  transition: transform 0.25s, visibility 0.25s ease-in;
`;

export default Banner;
