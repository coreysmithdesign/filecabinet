import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

class Businesses extends Component {
  constructor() {
    super();

    this.state = {
      businesses: [],
    };
  }

  componentDidMount() {
    this.getBusinesses();
  }

  getBusinesses() {
    axios.get(`/api/businesses`).then((res) => {
      this.setState({
        businesses: res.data,
      });
    });
  }

  render() {
    console.log(this.state);
    const businessesList = this.state.businesses.map((business) => (
      <TableRowLink
        key={business.business_id}
        to={`/business/${business.business_id}`}
      >
        <TableCell>{business.business_name}</TableCell>
        <TableCell>{business.phone}</TableCell>
        <TableCell>{business.address}</TableCell>
      </TableRowLink>
    ));

    return (
      <Layout>
        <PageHeader title="Businesses"></PageHeader>
        <PageContent>
          <PageMain>
            <Table>
              <TableHeader>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
              </TableHeader>
              {businessesList}
            </Table>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default Businesses;
