import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { Card, CardTitle, CardLabel, CardInfo } from "../global/Card";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

class Business extends Component {
  constructor() {
    super();

    this.state = {
      business: {},
    };
  }

  componentDidMount() {
    this.getBusiness();
  }

  getBusiness() {
    axios.get(`/api/business/${this.props.match.params.id}`).then((res) => {
      this.setState({
        business: res.data[0],
      });
    });
  }

  render() {
    console.log(this.state);
    const { business_name, phone, address } = this.state.business;

    return (
      <Layout>
        <PageHeader title="Businesses" link="/businesses"></PageHeader>
        <PageContent>
          <PageAside>
            <Card>
              <CardTitle>{business_name}</CardTitle>
              <CardLabel>Phone</CardLabel>
              <CardInfo>{phone}</CardInfo>
              <CardLabel>Address</CardLabel>
              <CardInfo>{address}</CardInfo>
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
              <TableRowLink to="/businesses/1/">
                <TableCell>June 20th, 2020</TableCell>
                <TableCell>Invoice</TableCell>
                <TableCell>Jerry McDaniels</TableCell>
                <TableCell>notes and stuff can go here.</TableCell>
              </TableRowLink>
              <TableRowLink to="/businesses/1/">
                <TableCell>June 20th, 2020</TableCell>
                <TableCell>Statement</TableCell>
                <TableCell>George Henry</TableCell>
                <TableCell>notes and stuff can go here.</TableCell>
              </TableRowLink>
              <TableRowLink to="/businesses/1/">
                <TableCell>June 20th, 2020</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>June Anderson</TableCell>
                <TableCell>notes and stuff can go here.</TableCell>
              </TableRowLink>
            </Table>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default Business;
