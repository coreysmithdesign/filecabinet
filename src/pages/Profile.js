import React from "react";
import styled from "styled-components";
import Layout from "./layout/Layout";
import PageContent from "./layout/PageContent";

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export default function Profile() {
  return (
    <Layout>
      <PageContent>
        <Main>
          <PageTitle>Profile</PageTitle>
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
