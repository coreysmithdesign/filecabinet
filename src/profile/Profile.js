import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/reducer";
import styled from "styled-components";
import Layout from "../layout/Layout";
import PageContent from "../layout/PageContent";
import axios from "axios";

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export default function Profile(props) {
  const dispatch = useDispatch();

  const submitLogout = () => {
    alert("logging out!");
    axios.post("/api/auth/logout").then(() => {
      dispatch(logoutUser());
      props.history.push("/");
    });
  };

  return (
    <Layout>
      <PageContent>
        <Main>
          <PageTitle>Profile</PageTitle>
          <button onClick={submitLogout}>Logout</button>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Submit" />
          </form>
        </Main>
      </PageContent>
    </Layout>
  );
}
