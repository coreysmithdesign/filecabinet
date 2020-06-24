import React from "react";
import styled from "styled-components";

const MainGroup = styled.main`
  flex: 1;
  display: flex;
  overflow: auto;
`;

export default function PageMain(props) {
  return <MainGroup>{props.children}</MainGroup>;
}
