import React from "react";
import styled from "styled-components";

const PageContentGroup = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  display: flex;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

export default function PageContent(props) {
  return <PageContentGroup>{props.children}</PageContentGroup>;
}
