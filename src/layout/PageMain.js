import React from "react";
import styled from "styled-components";

export default function PageMain(props) {
  return <MainGroup viewing={props.viewing}>{props.children}</MainGroup>;
}

const MainGroup = styled.main`
  height: 100%;
  display: ${(props) => (props.viewing ? "none" : "block")};
  overflow: auto;
  @media (min-width: 750px) {
    display: flex;
    flex: 1 1 auto;
  }
`;
