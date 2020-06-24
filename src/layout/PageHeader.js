import React from "react";
import styled from "styled-components";
import { size } from "../global/Interface";
import { Link } from "react-router-dom";

const PageHeaderGroup = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #29303b;
  @media (min-width: ${size.lg}) {
    display: flex;
    flex: 0 0 85px;
    align-items: center;
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 0.5rem;
  @media (min-width: ${size.lg}) {
    margin: 0;
  }
`;

const PageLink = styled(Link)`
  color: #ee5960;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  :hover {
    color: white;
  }
  :visited {
    text-decoration: none;
    color: #ee5960;
  }
`;

const PageActions = styled.div`
  margin-left: auto;
`;

export default function PageHeader(props) {
  return (
    <PageHeaderGroup>
      <PageTitle>
        {props.link ? (
          <PageLink to={`${props.link}`}>{props.title}</PageLink>
        ) : (
          props.title
        )}
      </PageTitle>
      <PageActions>{props.children}</PageActions>
    </PageHeaderGroup>
  );
}
