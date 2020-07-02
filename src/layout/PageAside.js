import React from "react";
import styled from "styled-components";

export default function PageAside(props) {
  return <AsideGroup viewing={props.viewing}>{props.children}</AsideGroup>;
}

const AsideGroup = styled.aside`
  display: ${(props) => (props.viewing ? "block" : "none")};
  overflow: auto;
  @media (min-width: 750px) {
    display: block;
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    flex: 0 0 340px;
  }
  @media (min-width: 1000px) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    flex: 0 0 500px;
  }
`;
