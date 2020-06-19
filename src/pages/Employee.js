import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";

export default function Employee() {
  return (
    <Layout>
      <PageHeader title="Employees" link="/employees"></PageHeader>
      <PageContent>
        <PageMain>An Individual Employee Goes Here</PageMain>
      </PageContent>
    </Layout>
  );
}
