import React from "react";
import styled from "styled-components";

const AsideGroup = styled.aside`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  overflow: scroll;
  @media (min-width: 750px) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    width: 240px;
  }
  @media (min-width: 1000px) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    width: 340px;
  }
`;

const Scroll = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function PageAside(props) {
  return (
    <AsideGroup>
      <Scroll>{props.children}</Scroll>
    </AsideGroup>
  );
}
