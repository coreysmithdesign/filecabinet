import React from "react";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import Search from "../global/Search";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

export default function Documents() {
  return (
    <Layout>
      <PageHeader title="Documents">
        <Search />
      </PageHeader>
      <PageContent>
        <PageMain>
          <Table>
            <TableHeader>
              <TableCell>Date</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Note</TableCell>
            </TableHeader>
            <TableRowLink to="/documents/1">
              <TableCell>June 20th, 2020</TableCell>
              <TableCell>Job Application</TableCell>
              <TableCell>Corey Smith</TableCell>
              <TableCell>notes and stuff can go here.</TableCell>
            </TableRowLink>
            <TableRowLink to="/documents/1">
              <TableCell>June 20th, 2020</TableCell>
              <TableCell>Job Application</TableCell>
              <TableCell>Corey Smith</TableCell>
              <TableCell>notes and stuff can go here.</TableCell>
            </TableRowLink>
            <TableRowLink to="/documents/1">
              <TableCell>June 20th, 2020</TableCell>
              <TableCell>Job Application</TableCell>
              <TableCell>Corey Smith</TableCell>
              <TableCell>notes and stuff can go here.</TableCell>
            </TableRowLink>
          </Table>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
