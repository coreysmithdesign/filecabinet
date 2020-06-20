import React from "react";
import Layout from "./layout/Layout";
import PageHeader from "./layout/PageHeader";
import PageContent from "./layout/PageContent";
import PageMain from "./layout/PageMain";
import { Link } from "react-router-dom";
import Table, {
  TableHeader,
  TableRowLink,
  TableCell,
} from "./components/Table";

export default function Employees() {
  return (
    <Layout>
      <PageHeader title="Employees"></PageHeader>
      <PageContent>
        <PageMain>
          <Table>
            <TableHeader>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Wage</TableCell>
            </TableHeader>
            <TableRowLink to="/employees/1">
              <TableCell>Corey Smith</TableCell>
              <TableCell>UI/UX Graphic Design</TableCell>
              <TableCell>Full-Time</TableCell>
              <TableCell>18.00</TableCell>
            </TableRowLink>
          </Table>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
