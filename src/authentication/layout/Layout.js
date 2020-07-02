import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon, size, color } from "../../global/globals";

const LayoutGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 50px;
  flex: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Logo = styled(Link)`
  margin-right: auto;
  padding-right: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #444;
  font-size: 1rem;
  font-weight: 800;
  :visited {
    color: #444;
  }
  :hover {
    text-decoration: none;
    color: #444;
  }
  @media (min-width: ${size.md}) {
    /* border-right: 1px solid rgba(0, 0, 0, 0.05); */
  }
  @media (min-width: ${size.lg}) {
    font-size: 1.35rem;
  }
`;

const LogoIcon = styled.span`
  font-size: 1.25rem;
  margin-right: 0.35rem;
  color: #dd3643;
  @media (min-width: ${size.lg}) {
    font-size: 1.875rem;
    margin-right: 0.65rem;
  }
`;

const LogoCabinet = styled.span`
  color: #dd3643;
  font-weight: 100;
`;

const AuthLink = styled(Link)`
  text-decoration: none;
  font-size: 0.5rem;
  display: inline;
  padding: 0.5rem;
  color: ${color.text};
  border-radius: 6px;
  transition: background-color 0.2s;
  font-weight: 600;
  :hover {
    text-decoration: none;
    color: #dd3643;
  }
  :visited {
    text-decoration: none;
    color: ${color.text};
  }
  @media (min-width: ${size.md}) {
    font-size: 0.875rem;
    border-radius: 0;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid transparent;
    &.active {
      color: #dd3643;
    }
  }
`;

const Content = styled.div`
  flex: 1;
`;

export default function Layout(props) {
  return (
    <LayoutGroup>
      <Header>
        <Logo to="/">
          <LogoIcon>{icon.cabinet}</LogoIcon>File
          <LogoCabinet>Cabinet</LogoCabinet>
        </Logo>
        <AuthLink to="/login">Login</AuthLink>
        <AuthLink to="/register">Register</AuthLink>
      </Header>
      <Content>{props.children}</Content>
    </LayoutGroup>
  );
}
