import React from "react";
import styled from "styled-components";

const MainGroup = styled.main`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  overflow: scroll;
`;

const Scroll = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function PageMain(props) {
  return (
    <MainGroup>
      <Scroll>{props.children}</Scroll>
    </MainGroup>
  );
}
