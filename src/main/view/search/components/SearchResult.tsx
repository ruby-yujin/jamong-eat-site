import React from "react";
import styled from "styled-components";
import { data_list } from "../../../../api/data_list";
import SearchItem from "../../index/components/SearchItem";

function SearchResult() {
  return (
    <Container>
      <ResultTop>
        <Inner>
          <TitleWrap>
            <h1>검색</h1>
            <SearchItem />
          </TitleWrap>
        </Inner>
      </ResultTop>
      <ResultBottom>
        <Inner>
          <TextWrap>
            <p>
              <strong>"중랑"</strong> 맛집 결과 {data_list.length}건
              검색되었습니다
            </p>
          </TextWrap>
          {data_list.map((item) => {
            return (
              <CardBox key={item.id}>
                <CardImg>
                  <img src={item.img_src} alt={item.store_name} />
                  <p>{item.store_location}</p>
                  <p>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                        />
                      </svg>
                      즐겨찾기 : {item.pic_count}
                    </span>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                        />
                      </svg>
                      조회수 : {item.view_count}
                    </span>
                  </p>
                </CardImg>
                <CardText>
                  <h2>
                    {item.store_name} <span>{item.store_score}</span>{" "}
                  </h2>
                  <Desc>{item.store_description}</Desc>
                  <p>{item.store_address}</p>
                </CardText>
              </CardBox>
            );
          })}
        </Inner>
      </ResultBottom>
    </Container>
  );
}

const Container = styled.div``;

const Inner = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const ResultTop = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  h1 {
    width: 50px;
    font-size: 1.2rem;
    text-align: center;
    margin-right: 1rem;
  }
`;

const TitleWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const ResultBottom = styled.div``;

const TextWrap = styled.div`
  color: #666;
  margin: 3rem 0 1rem;
  strong {
    color: #f06449;
  }
`;

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 1.4rem;
  border-bottom: 1px solid #88888883;
`;

const CardImg = styled.div`
  > img {
    width: 300px;
    height: 180px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    display: flex;
    margin-bottom: 0.4rem;
    span {
      color: #666;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

const CardText = styled.div`
  width: calc(100% - 350px);
  h2 {
    font-size: 1.4rem;
    span {
      font-size: 2rem;
      color: orange;
    }
  }
`;

const Desc = styled.p`
  margin: 1rem 0;
  font-size: 0.8rem 0 0.4rem;
  color: #33333367;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default SearchResult;
