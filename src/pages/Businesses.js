import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import { Link } from "react-router-dom";

export default function Businesses() {
  return (
    <Layout>
      <PageHeader title="Businesses"></PageHeader>
      <PageContent>
        <PageMain>
          <Link to="/businesses/1">Apple, Inc</Link>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
