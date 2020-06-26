import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/reducer";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { icon, size, color } from "../global/Interface";

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
  flex: 0 0 50px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: ${size.md}) {
    flex: 0 0 65px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 0 0 50px;
  height: 50px;
  justify-content: space-evenly;
  order: 3;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
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

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  color: ${color.text};
  :hover {
    text-decoration: none;
    color: ${color.text};
  }
  :visited {
    text-decoration: none;
    color: ${color.text};
  }
  @media (min-width: ${size.md}) {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1rem;
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
  top: 50px;
  right: 0;
  background: white;
  padding: 0.5rem 0;
  @media (min-width: ${size.lg}) {
    width: 300px;
    top: 40px;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ShortcutButton = styled.button`
  font-weight: 100;
  font-size: 1.5rem;
  text-decoration: none;
  font-size: 1rem;
  color: ${color.text};
  margin-left: 1rem;
  :hover {
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
    background: #29303b;
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
    background: #29303b;
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
  color: white;
  :visited {
    color: #444;
  }
  :hover {
    text-decoration: none;
    color: #444;
  }
  @media (min-width: ${size.md}) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
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
            title="Add a new item asdf"
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
