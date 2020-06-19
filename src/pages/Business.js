import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import PageAside from "./layout/PageAside";
import Card from "./layout/Card";

export default function Business() {
  return (
    <Layout>
      <PageHeader title="Businesses" link="/businesses"></PageHeader>
      <PageContent>
        <PageAside>
          <Card>
            <h1>This</h1>
          </Card>
        </PageAside>
        <PageMain>An individual business goes here</PageMain>
      </PageContent>
    </Layout>
  );
}
