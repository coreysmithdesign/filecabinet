import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { Form, FormSection, Label, Input, Submit } from "../global/Form";

class New extends Component {
  constructor() {
    super();

    this.state = {
      business_name: "",
      phone: "",
      address: "",
    };
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
      .post(`/api/businesses/`, { business_name, phone, address })
      .then((res) => {
        console.log(res);
        this.props.history.push(`/businesses/${res.data.business_id}`);
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  render() {
    console.log("state of business new", this.state);
    const { business_name, phone, address } = this.state;
    return (
      <Layout>
        <PageHeader title="Add a New Business"></PageHeader>
        <PageContent>
          <PageMain>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormSection>Business Information</FormSection>
              <Label>Business Name</Label>
              <Input
                type="text"
                name="business_name"
                value={business_name}
                onChange={(e) => this.handleChange(e)}
              />
              <Label>Phone</Label>
              <Input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => this.handleChange(e)}
              />
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                value={address}
                onChange={(e) => this.handleChange(e)}
              />
              <Submit type="submit" value="Submit" />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default New;
