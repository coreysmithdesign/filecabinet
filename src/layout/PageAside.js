import React from "react";
import styled from "styled-components";

const AsideGroup = styled.aside`
  flex: 0 0 100px;
  overflow: auto;
  @media (min-width: 750px) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    flex: 0 0 340px;
  }
  @media (min-width: 1000px) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    flex: 0 0 500px;
  }
`;

export default function PageAside(props) {
  return <AsideGroup className="AsideGroup">{props.children}</AsideGroup>;
}
