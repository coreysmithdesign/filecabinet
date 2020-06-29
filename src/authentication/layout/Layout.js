import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon } from "../../global/globals";

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
  font-weight; 800;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: none;
  }
`;

const LogoIcon = styled.span`
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

const LogoCabinet = styled.span`
  font-weight: 100;
`;

const AuthLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  :hover {
    text-decoration: none;
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
