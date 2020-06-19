import React from "react";
import styled from "styled-components";
import { icon } from "../../global/interface";
import { Link } from "react-router-dom";

const PageHeaderGroup = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const PageTitle = styled.h2`
  color: white;
  font-size: 1rem;
`;

const PageLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  :hover {
    color: white;
  }
  :visited {
    color: white;
  }
`;

export default function PageHeader(props) {
  return (
    <PageHeaderGroup>
      <PageTitle>
        {props.link ? (
          <PageLink to={`${props.link}`}>
            {icon.chevron_left} {props.title}
          </PageLink>
        ) : (
          props.title
        )}
      </PageTitle>
      {props.children}
    </PageHeaderGroup>
  );
}
