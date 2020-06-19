import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import { Link } from "react-router-dom";

export default function Employees() {
  return (
    <Layout>
      <PageHeader title="Employees"></PageHeader>
      <PageContent>
        <PageMain>
          <Link to="/employees/1">Corey Smith</Link>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
