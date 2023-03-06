import { Link } from "react-router-dom";
import styled from "styled-components";

const wantItemList = [
  {
    id: 1,
    what_kind: "한식",
    desc: "한국사람은 한식이제!",
    img_src: "",
    img_alt: "한식이미지",
    path: "",
  },
  {
    id: 2,
    what_kind: "양식",
    desc: "왜 진득한 밀가루 땡기는날",
    img_src: "",
    img_alt: "양식이미지",
    path: "",
  },
  {
    id: 3,
    what_kind: "중식",
    desc: "배에 기름칠 좀 해보까아~",
    img_src: "",
    img_alt: "중식이미지",
    path: "",
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
              <strong>{item.what_kind}</strong>
              <p>{item.desc}</p>
              <Link to={item.path}>바로가기</Link>
              <img src={item.img_src} alt="" />
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
  }
`;

export default WhatDoWant;
