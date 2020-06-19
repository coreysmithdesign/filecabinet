import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import PageAside from "./layout/PageAside";

export default function Document() {
  return (
    <Layout>
      <PageHeader title="Documents" link="/documents"></PageHeader>
      <PageContent>
        <PageAside>aside stuff</PageAside>
        <PageMain>
          <p>The PDF goes here.</p>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
