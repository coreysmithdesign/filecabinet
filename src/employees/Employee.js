import React from "react";
import styled from "styled-components";
import { icon } from "../global/Interface";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import {
  Card,
  CardTitle,
  CardLabel,
  CardList,
  CardListItem,
  CardInfo,
} from "../global/Card";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

const Verify = styled.span`
  display: inline-block;
  width: 1rem;
`;

export default function Employee() {
  return (
    <Layout>
      <PageHeader title="Employees" link="/employees"></PageHeader>
      <PageContent>
        <PageAside>
          <Card>
            <CardTitle>Employment Seasonal</CardTitle>
            <CardLabel>Required</CardLabel>
            <CardList>
              <CardListItem>
                <Verify>{icon.check}</Verify> ECO (Employee Coding Options)
              </CardListItem>
              <CardListItem>
                <Verify>{icon.check}</Verify> W-4 Income Tax Withholding
              </CardListItem>
              <CardListItem>
                <Verify>{icon.times}</Verify> I-9 Employment Eligibility
              </CardListItem>
            </CardList>
            <CardLabel>Recommended</CardLabel>
            <CardList>
              <CardListItem>
                <Verify>{icon.times}</Verify> Direct Deposit
              </CardListItem>
            </CardList>
          </Card>

          <Card>
            <CardTitle>Position</CardTitle>
            <CardLabel>Title</CardLabel>
            <CardInfo>Outside Plan Technician</CardInfo>
          </Card>

          <Card>
            <CardTitle>Contact</CardTitle>
            <CardLabel>Phone</CardLabel>
            <CardInfo>208-555-5555</CardInfo>
            <CardLabel>Email</CardLabel>
            <CardInfo>roger4537@gmail.com</CardInfo>
            <CardLabel>Address</CardLabel>
            <CardInfo>555 5th Street, Coeur d'Alene, ID 83841</CardInfo>
          </Card>
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
