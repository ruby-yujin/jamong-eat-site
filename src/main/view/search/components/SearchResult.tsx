import React from "react";
import styled from "styled-components";
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
              <strong>"강남"</strong> 맛집 결과 0건 검색되었습니다
            </p>
          </TextWrap>
        </Inner>
      </ResultBottom>
    </Container>
  );
}

const Container = styled.div``;

const Inner = styled.div`
  max-width: 1000px;
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
  margin: 3rem 0;
  strong {
    color: #f06449;
  }
`;

export default SearchResult;
