import React from "react";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { Card, CardTitle, CardLabel, CardInfo } from "../global/Card";

export default function Document() {
  return (
    <Layout>
      <PageHeader title="Documents" link="/documents"></PageHeader>
      <PageContent>
        <PageAside>
          <Card>
            <CardTitle>Document Details</CardTitle>
            <CardLabel>PDF File</CardLabel>
            <CardInfo>Upload a pdf</CardInfo>
            <CardLabel>Folder(s)</CardLabel>
            <CardInfo>Folders this is found in</CardInfo>
            <CardLabel>Name</CardLabel>
            <CardInfo>Name of this document</CardInfo>
            <CardLabel>Date</CardLabel>
            <CardInfo>06/17/2019</CardInfo>
            <CardLabel>Note</CardLabel>
            <CardInfo>Note about this document...</CardInfo>
          </Card>
        </PageAside>
        <PageMain>
          <iframe
            id="fred"
            title="PDF in an i-Frame"
            src="http://www.pdf995.com/samples/pdf.pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
          ></iframe>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
