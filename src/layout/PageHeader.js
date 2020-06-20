import React from "react";
import styled from "styled-components";
import { icon, size } from "../global/Interface";
import { Link } from "react-router-dom";

const PageHeaderGroup = styled.div`
  flex: 0 0 50px;
  display: flex;
  overflow: auto;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #29303b;
  @media (min-width: ${size.lg}) {
    flex: 0 0 85px;
  }
`;

const PageTitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
`;

const PageLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: white;
  }
  :visited {
    text-decoration: none;
    color: white;
  }
`;

const PageLinkIcon = styled.span`
  font-weight: 100;
  font-size: 0.75rem;
  position: relative;
  bottom: 2px;
`;

const PageActions = styled.div`
  margin-left: auto;
`;

export default function PageHeader(props) {
  return (
    <PageHeaderGroup className="pageHeaderGroup">
      <PageTitle>
        {props.link ? (
          <PageLink to={`${props.link}`}>
            <PageLinkIcon>{icon.chevron_left}</PageLinkIcon> {props.title}
          </PageLink>
        ) : (
          props.title
        )}
      </PageTitle>
      <PageActions>{props.children}</PageActions>
    </PageHeaderGroup>
  );
}
