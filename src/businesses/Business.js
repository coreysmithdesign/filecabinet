import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import PageAside from "../layout/PageAside";
import { icon } from "../global/globals";
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
      isToggled: false,
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

  handleToggle() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  render() {
    console.log(this.state);
    const { business_name, phone, address } = this.state;

    return (
      <Layout>
        <PageHeader
          icon={icon.folder}
          title="Businesses"
          link="/businesses"
          page={business_name}
        ></PageHeader>
        <PageContent>
          <ToggleForm onClick={() => this.handleToggle()}>
            {icon.form}
          </ToggleForm>
          <PageAside viewing={this.state.isToggled}>
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
                <Submit type="submit" value="Update" />
              </Form>
              <button onClick={(e) => this.handleDelete(e)}>Delete</button>
            </Card>
          </PageAside>
          <PageMain viewing={this.state.isToggled}>
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

const ToggleForm = styled.button`
  all: unset;
  position: absolute;
  bottom: 80px;
  left: 10px;
  background: white;
  border-radius: 100%;
  padding: 1rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  :hover {
    cursor: pointer;
  }
  @media (min-width: 750px) {
    display: none;
  }
`;

export default Business;
