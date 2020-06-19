import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon } from "../../global/interface";

const LayoutGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #555;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 50px;
  flex: 0;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  order: 3;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  @media (min-width: 750px) {
    order: inherit;
    justify-content: inherit;
    background: none;
    height: 50px;
    position: absolute;
    left: 140px;
    align-items: center;
    border: none;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  :hover {
    text-decoration: none;
    color: white;
  }
  color: white;
  :visited {
    color: white;
  }
  @media (min-width: 750px) {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

const AddNew = styled(Link)`
  font-weight: 100;
  font-size: 1.5rem;
  color: white;
  margin-right: 1rem;
  :hover {
    color: white;
  }
  :visited {
    color: white;
  }
`;

const ProfileLink = styled(Link)`
  font-size: 1.5rem;
  :hover {
    text-decoration: none;
    color: white;
  }
  color: white;
  :visited {
    color: white;
  }
`;

const NavIcon = styled.span`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  @media (min-width: 750px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  margin-right: auto;
  padding-right: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: none;
    color: white;
  }
  color: white;
  :visited {
    color: white;
  }
  @media (min-width: 750px) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const LogoIcon = styled.span`
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

const LogoCabinet = styled.span`
  font-weight: 100;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default function Layout(props) {
  return (
    <LayoutGroup>
      <Header>
        <Logo to="/documents">
          <LogoIcon>{icon.cabinet}</LogoIcon>File
          <LogoCabinet>Cabinet</LogoCabinet>
        </Logo>
        <AddNew to="/documentns">{icon.add}</AddNew>
        <ProfileLink to="/profile" title="Go to your profile">
          {icon.profile}
        </ProfileLink>
      </Header>
      <Nav>
        <NavLink to="/documents" title="Go to documents">
          <NavIcon>{icon.files}</NavIcon>Documents
        </NavLink>
        <NavLink to="/employees" title="Go to employees">
          <NavIcon>{icon.folders}</NavIcon>Employees
        </NavLink>
        <NavLink to="/businesses" title="Go to businesses">
          <NavIcon>{icon.folders}</NavIcon>Businesses
        </NavLink>
      </Nav>
      <Content>{props.children}</Content>
    </LayoutGroup>
  );
}
