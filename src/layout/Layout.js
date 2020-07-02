import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/reducer";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon, size, color } from "../global/globals";

const LayoutGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex: 0 0 65px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (min-width: ${size.md}) {
    flex: 0 0 65px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 0 0 65px;
  height: 65px;
  justify-content: space-evenly;
  align-items: center;
  order: 3;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (min-width: ${size.md}) {
    order: inherit;
    justify-content: inherit;
    background: none;
    flex: 0 0 65px;
    height: 65px;
    position: absolute;
    left: 190px;
    align-items: center;
    border: none;
  }
`;

const DrawerLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 0.5rem;
  padding: 0.5rem;
  width: 100%;
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
    display: inline-block;
    font-size: 0.875rem;
    border-radius: 0;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid transparent;
    &.active {
      color: #dd3643;
    }
  }
`;

const ShortcutGroup = styled.div`
  @media (min-width: ${size.lg}) {
    position: relative;
  }
`;

const ShortcutDropdown = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: auto;
  top: 65px;
  right: 0;
  background: white;
  padding: 0.5rem 0;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  @media (min-width: ${size.lg}) {
    width: 300px;
    right: -6px;
    top: 30px;
    border-radius: 4px;
    :before {
      content: "";
      display: block;
      position: absolute;
      top: -5px;
      right: 6px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid white;
    }
  }
`;

const ShortcutButton = styled.button`
  all: unset;
  font-weight: 100;
  font-size: 1.5rem;
  text-decoration: none;
  font-size: 1rem;
  color: ${color.text};
  margin-left: 1rem;
  :hover {
    cursor: pointer;
    color: ${color.text};
  }
  :visited {
    color: ${color.text};
  }
`;

const ShortcutLink = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #555;
  :visited {
    text-decoration: none;
    color: #555;
  }
  :hover {
    background: #626a78;
    color: #fff;
    text-decoration: none;
  }
  @media (min-width: ${size.lg}) {
    padding: 0.5rem 1rem;
  }
`;

const ShortcutLogout = styled.a`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #555;
  :visited {
    text-decoration: none;
    color: #555;
  }
  :hover {
    background: #626a78;
    color: #fff;
    text-decoration: none;
  }
  @media (min-width: ${size.lg}) {
    padding: 0.5rem 1rem;
  }
`;

const NavIcon = styled.span`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  @media (min-width: ${size.md}) {
    display: none;
  }
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

const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export default function Layout(props) {
  const [revealNew, setRevealNew] = useState(false);
  const [revealOpt, setRevealOpt] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitLogout = () => {
    alert("logging out!");
    axios.post("/api/auth/logout").then(() => {
      dispatch(logoutUser());
      history.push("/login");
    });
  };

  return (
    <LayoutGroup>
      <Header>
        <Logo to="/documents">
          <LogoIcon>{icon.cabinet}</LogoIcon>file
          <LogoCabinet>cabinet</LogoCabinet>
        </Logo>

        <ShortcutGroup>
          <ShortcutButton
            title="Add a new item"
            onClick={() => setRevealNew((revealNew) => !revealNew)}
          >
            {icon.add} {icon.caret_down}
          </ShortcutButton>
          {revealNew && (
            <ShortcutDropdown>
              <ShortcutLink to="/documents/new">New Document</ShortcutLink>
              <ShortcutLink to="/employees/new">New Employee</ShortcutLink>
              <ShortcutLink to="/businesses/new">New Business</ShortcutLink>
            </ShortcutDropdown>
          )}
        </ShortcutGroup>

        <ShortcutGroup>
          <ShortcutButton
            title="Go to your profile"
            onClick={() => setRevealOpt((revealOpt) => !revealOpt)}
          >
            {icon.profile} {icon.caret_down}
          </ShortcutButton>
          {revealOpt && (
            <ShortcutDropdown>
              <ShortcutLink to="/profile">Profile</ShortcutLink>
              <ShortcutLogout href="#" onClick={submitLogout}>
                Logout
              </ShortcutLogout>
            </ShortcutDropdown>
          )}
        </ShortcutGroup>
      </Header>
      <Nav>
        <DrawerLink to="/documents" title="Go to documents">
          <NavIcon>{icon.files}</NavIcon>Documents
        </DrawerLink>
        <DrawerLink to="/employees" title="Go to employees">
          <NavIcon>{icon.folders}</NavIcon>Employees
        </DrawerLink>
        <DrawerLink to="/businesses" title="Go to businesses">
          <NavIcon>{icon.folders}</NavIcon>Businesses
        </DrawerLink>
      </Nav>
      <Content className="content">{props.children}</Content>
    </LayoutGroup>
  );
}
