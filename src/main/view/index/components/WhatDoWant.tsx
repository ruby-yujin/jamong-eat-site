import { Link } from "react-router-dom";
import styled from "styled-components";

const wantItemList = [
  {
    id: 1,
    what_kind: "한식",
    desc: "한국사람은 한식이제!",
    img_alt: "한식이미지",
    path: "assets/img/main/food_kr.png",
  },
  {
    id: 2,
    what_kind: "양식",
    desc: "왜 진득한 밀가루 땡기는날",
    img_alt: "양식이미지",
    path: "assets/img/main/food_en.png",
  },
  {
    id: 3,
    what_kind: "중식",
    desc: "배에 기름칠 좀 해보까아~",
    img_alt: "중식이미지",
    path: "assets/img/main/food_ch.png",
  },
];
function WhatDoWant() {
  return (
    <Container>
      <SectionTitle>나만믿어! 뭐 먹고싶어</SectionTitle>
      <Item>
        {wantItemList.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}>
                <p>{item.desc}</p>
                <strong>{item.what_kind}</strong>
                <img src={item.path} alt="" />
              </Link>
            </li>
          );
        })}
      </Item>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: 3.4rem auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #f06449;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Item = styled.ul`
  display: flex;
  gap: 1.3rem;
  li {
    border: 1px solid rgb(221, 221, 221);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    width: 33.333%;
    height: 180px;
    a {
      display: flex;
      flex-direction: column;
      justify-items: center;
      padding: 1rem;
      strong {
        display: block;
        color: #333;
        font-size: 1.3rem;
        margin-top: 1rem;
      }
      p {
        font-size: 1rem;
        color: #666;
      }
      img {
        display: block;
        width: 100px;
        height: 100px;
        margin-left: auto;
      }
    }
  }
`;

export default WhatDoWant;
