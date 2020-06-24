import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import {
  Form,
  FormSection,
  Label,
  Input,
  Select,
  Option,
  TextArea,
  Submit,
} from "../global/Form";

class NewDocument extends Component {
  constructor() {
    super();

    this.state = {
      document_name: "",
      note: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { document_name, note } = this.state;
    axios
      .post(`/api/documents/`, { document_name, note })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  render() {
    const { note, document_name } = this.state;
    console.log(this.state);
    return (
      <Layout>
        <PageHeader title="Add a New Document"></PageHeader>
        <PageContent>
          <PageMain>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormSection>Document Information</FormSection>
              <Label htmlFor="employee_id">Belongs To</Label>
              <Select name="employee_id">
                <Option>Corey Smith</Option>
              </Select>

              <Label htmlFor="document_name">Document Name</Label>
              <Input
                type="text"
                name="document_name"
                value={document_name}
                onChange={(e) => this.handleChange(e)}
              />

              <Label htmlFor="note">Note</Label>
              <TextArea
                type="text"
                name="note"
                value={note}
                onChange={(e) => this.handleChange(e)}
              >
                {note}
              </TextArea>

              <Submit type="submit" value="Submit" />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default NewDocument;
