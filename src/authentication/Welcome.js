import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import { icon } from "../global/interface";
import { Link } from "react-router-dom";

const Cover = styled.div`
  background-image: url("https://www.homebarnshop.co.uk/wp-content/uploads/2016/05/Vintage-Industrial-Steel-Filing-Cabinets.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-reapeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  justify-content: center;
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
  background: #ddd;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  width: 80%;
  max-width: 200px;
  margin: 0.5rem auto;
  font-weight: bold;
  :hover {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
`;

export default function Welcome() {
  return (
    <Layout>
      <Cover>
        <Lead>Don't get up.</Lead>
        <Kicker>These files come to you.</Kicker>
        <CTA to="/register">{icon.key} Get Your Key</CTA>
      </Cover>
    </Layout>
  );
}
