import React from "react";
import styled from "styled-components";
import Layout from "./layout/Layout";
import { icon } from "../global/globals";
import { Link } from "react-router-dom";
import CoverPhoto from "../cover.jpg";

const Cover = styled.div`
  background-image: url(${CoverPhoto});
  background-position: center;
  background-size: cover;
  background-repeat: no-reapeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Lead = styled.h1`
  margin: 0.5rem 0;
  font-weight: bold;
`;

const Kicker = styled.h2`
  margin: 0.5rem 0;
  font-weight: bold;
`;

const CTA = styled(Link)`
  background: #dd3643;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  width: 80%;
  max-width: 200px;
  margin: 0.5rem auto;
  font-weight: bold;
  :hover {
    color: white;
    text-decoration: none;
  }
  :visited {
    color: white;
    text-decoration: none;
  }
`;

export default function Welcome() {
  return (
    <Layout>
      <Cover>
        <Box>
          <Lead>Don't get up.</Lead>
          <Kicker>These files come to you.</Kicker>
          <CTA to="/login">{icon.key} Log In</CTA>
        </Box>
      </Cover>
    </Layout>
  );
}
