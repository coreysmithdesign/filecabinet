import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { Card } from "../global/Card";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";
import { Form, Label, Input, Submit } from "../global/Form";

class Business extends Component {
  constructor() {
    super();

    this.state = {
      business_name: "",
      phone: "",
      address: "",
    };
  }

  componentDidMount() {
    axios.get(`/api/business/${this.props.match.params.id}`).then((res) => {
      const { business_name, phone, address } = res.data[0];
      this.setState({
        business_name: business_name,
        phone: phone,
        address: address,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { business_name, phone, address } = this.state;
    axios
      .put(`/api/business/${this.props.match.params.id}`, {
        business_name,
        phone,
        address,
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`/api/business/${this.props.match.params.id}`)
      .then((res) => {
        console.log("Business deleted");
        this.props.history.push("/businesses");
      })
      .catch((err) => {
        alert("Could not delete");
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    const { business_name, phone, address } = this.state;

    return (
      <Layout>
        <PageHeader
          title="Businesses"
          link="/businesses"
          page={business_name}
        ></PageHeader>
        <PageContent>
          <PageAside>
            <Card>
              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Label htmlFor="business_name">Business Name</Label>
                <Input
                  type="text"
                  name="business_name"
                  value={business_name}
                  onChange={(e) => this.handleChange(e)}
                />

                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => this.handleChange(e)}
                />

                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => this.handleChange(e)}
                />
                <Submit type="submit" value="Submit" />
              </Form>
              <button onClick={(e) => this.handleDelete(e)}>Delete</button>
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
