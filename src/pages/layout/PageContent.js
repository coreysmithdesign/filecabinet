import React from "react";
import styled from "styled-components";

const PageContentGroup = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    display: flex;
  }
`;

export default function PageContent(props) {
  return <PageContentGroup>{props.children}</PageContentGroup>;
}
