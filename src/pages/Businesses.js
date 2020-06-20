import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import Table, {
  TableHeader,
  TableRowLink,
  TableCell,
} from "./components/Table";

export default function Businesses() {
  return (
    <Layout>
      <PageHeader title="Businesses"></PageHeader>
      <PageContent>
        <PageMain>
          <Table>
            <TableHeader>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Note</TableCell>
            </TableHeader>
            <TableRowLink to="/businesses/1">
              <TableCell>Apple, Inc</TableCell>
              <TableCell>One Infinite Loop, Cupertino, CA 90210</TableCell>
              <TableCell>555-555-5555</TableCell>
              <TableCell>895 No's, 0 Yes'</TableCell>
            </TableRowLink>
          </Table>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
