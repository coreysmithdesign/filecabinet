import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import PageAside from "./layout/PageAside";
import Card, {
  CardTitle,
  CardLabel,
  CardList,
  CardListItem,
  CardInfo,
} from "./components/Card";

export default function Document() {
  return (
    <Layout>
      <PageHeader title="Documents" link="/documents"></PageHeader>
      <PageContent>
        <PageAside>
          <Card>
            <CardTitle>Overview</CardTitle>
            <CardLabel>Required</CardLabel>
            <CardList>
              <CardListItem>ECO (Employee Coding Options)</CardListItem>
              <CardListItem>W-4 Income Tax Withholding</CardListItem>
            </CardList>
            <CardLabel>Recommended</CardLabel>
          </Card>

          <Card>
            <CardTitle>Position</CardTitle>
            <CardLabel>Title</CardLabel>
            <CardInfo>Outside Plan Technician</CardInfo>
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
