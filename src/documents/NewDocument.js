import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { icon } from "../global/globals";
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
      employee_id: 0,
      employees: [],
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    axios.get(`/api/employees`).then((res) => {
      this.setState({
        employees: res.data,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      [e.target.name]: +e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { document_name, note, employee_id } = this.state;
    axios
      .post(`/api/documents/`, { document_name, note, employee_id })
      .then((res) => {
        console.log(res);
        this.props.history.push(`/documents/${res.data.document_id}`);
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  render() {
    const { note, document_name, employee_id } = this.state;
    console.log(this.state);

    const employeeList = this.state.employees.map((employee) => (
      <Option key={employee.employee_id} value={employee.employee_id}>
        {employee.employee_name}
      </Option>
    ));

    return (
      <Layout>
        <PageHeader icon={icon.fileadd} title="Add a New Document"></PageHeader>
        <PageContent>
          <PageMain>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormSection>Document Information</FormSection>
              <Label htmlFor="employee_id">Employee</Label>
              <Select
                name="employee_id"
                value={employee_id}
                onChange={(e) => this.handleChangeSelect(e)}
              >
                <Option key={0}>Select</Option>
                {employeeList}
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

              <Submit type="submit" value="Add Document" />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default NewDocument;
