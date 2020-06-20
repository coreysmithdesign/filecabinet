import React from "react";
import styled from "styled-components";

const SearchField = styled.input`
  all: unset;
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
`;

export default function Search() {
  return (
    <form>
      <SearchField type="search" placeholder="Search documents..." />
    </form>
  );
}
