import React from "react";
import Layout from "../layout/Layout";
import PageContent from "../layout/PageContent";
import PageHeader from "../layout/PageHeader";
import PageMain from "../layout/PageMain";
import { Form, FormSection, Label, Input } from "../global/Form";

export default function Profile(props) {
  return (
    <Layout>
      <PageHeader title="Profile"></PageHeader>
      <PageContent>
        <PageMain>
          <Form>
            <FormSection>Profile Information</FormSection>
            <Label>Username</Label>
            <Input type="text" />
            <Label>Full Name</Label>
            <Input type="text" />
            <Label>Email</Label>
            <Input type="text" />
            <Label>Business Name</Label>
            <Input type="text" />
          </Form>
        </PageMain>
      </PageContent>
    </Layout>
  );
}
