import React from "react";
import styled from "styled-components";

export function SearchItem() {
  return (
    <SearchWrap>
      <SearchInput />
      <BtnSearch>
        <img src="assets/img/icon_search.svg" alt="검색아이콘" />
      </BtnSearch>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  width: 100%;
  height: 50px;
  border: 4px solid #f06449;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  background: transparent;
  color: #333;
  font-size: 1rem;
  box-shadow: none;
  border: none;
  padding-left: 1rem;
`;

const BtnSearch = styled.button`
  width: 15%;
  height: 100%;
  background: #f06449;
  img {
    width: 30px;
  }
`;

export default SearchItem;
