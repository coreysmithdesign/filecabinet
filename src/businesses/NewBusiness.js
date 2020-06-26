import React, { Component } from "react";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { Form, FormSection, Label, Input } from "../global/Form";

class New extends Component {
  render() {
    console.log(this.state);
    return (
      <Layout>
        <PageHeader title="Add a New Business"></PageHeader>
        <PageContent>
          <PageMain>
            <Form>
              <FormSection>Business Information</FormSection>
              <Label>Business Name</Label>
              <Input type="text" />
              <Label>Phone</Label>
              <Input type="text" />
              <Label>Address</Label>
              <Input type="text" />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default New;
