import React from "react";
import styled from "styled-components";

const SearchField = styled.input`
  background: white;
  padding: 0.5rem;
  border: 0;
  border-radius: 4px;
  width: 100%;
`;

export default function Search() {
  return (
    <form>
      <SearchField type="search" placeholder="Search documents..." />
    </form>
  );
}
