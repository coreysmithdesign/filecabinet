import React from "react";
import styled from "styled-components";

export default function PageContent(props) {
  return (
    <PageContentGroup className="pageconentgroup">
      {props.children}
    </PageContentGroup>
  );
}

const PageContentGroup = styled.div`
  overflow: hidden;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  display: flex;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
