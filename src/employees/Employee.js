import React, { useState } from "react";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";
import Edit from "./Edit";
import Overview from "./Overview";

export default function Employee(props) {
  const [isEditting, setIsEditting] = useState(false);
  const toggleEdit = () => {
    setIsEditting((prevIsEditting) => !prevIsEditting);
  };

  return (
    <Layout>
      <PageHeader title="Employees" link="/employees"></PageHeader>
      <PageContent>
        <PageAside>
          <div>
            <button onClick={toggleEdit}>Edit</button>
          </div>
          {isEditting ? <Edit /> : <Overview />}
        </PageAside>
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
