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
  Submit,
  Option,
} from "../global/Form";

class New extends Component {
  constructor() {
    super();

    this.state = {
      employee_name: "",
      address: "",
      birth_date: "",
      citizenship: "",
      current_wage: "",
      date_of_hire: "",
      date_of_separation: "",
      department: "",
      drivers_license_expire_date: "",
      drivers_license_number: "",
      drivers_license_state: "",
      email: "",
      employment_status: "",
      irs_allowances: "",
      irs_marital_status: "",
      irs_withheld: "",
      phone: "",
      position: "",
      pto_level: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e, id) {
    e.preventDefault();
    const {
      employee_name,
      address,
      birth_date,
      citizenship,
      current_wage,
      date_of_hire,
      date_of_separation,
      department,
      drivers_license_expire_date,
      drivers_license_number,
      drivers_license_state,
      email,
      employment_status,
      irs_allowances,
      irs_marital_status,
      irs_withheld,
      phone,
      position,
      pto_level,
    } = this.state;
    axios
      .post(`/api/employees`, {
        employee_name,
        address,
        birth_date,
        citizenship,
        current_wage,
        date_of_hire,
        date_of_separation,
        department,
        drivers_license_expire_date,
        drivers_license_number,
        drivers_license_state,
        email,
        employment_status,
        irs_allowances,
        irs_marital_status,
        irs_withheld,
        phone,
        position,
        pto_level,
      })
      .then((res) => {
        this.props.history.push("/employees");
      })
      .catch((err) => {
        alert("Could not post");
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    const {
      employee_name,
      address,
      citizenship,
      current_wage,
      department,
      drivers_license_number,
      drivers_license_state,
      email,
      employment_status,
      irs_allowances,
      irs_marital_status,
      irs_withheld,
      phone,
      position,
      pto_level,
    } = this.state;

    return (
      <Layout>
        <PageHeader
          icon={icon.folderadd}
          title="Add a New Employee"
        ></PageHeader>
        <PageContent>
          <PageMain>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormSection>Contact Information</FormSection>
              <Label htmlFor="employee_name">Name</Label>
              <Input
                type="text"
                name="employee_name"
                value={employee_name}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="address">Addresss</Label>
              <Input
                type="text"
                name="address"
                value={address}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => this.handleChange(e)}
              />

              <FormSection>Employment</FormSection>
              <Label htmlFor="position">Position</Label>
              <Input
                type="text"
                name="position"
                value={position}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="department">Department</Label>
              <Input
                type="text"
                name="department"
                value={department}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="current_wage">Wage</Label>
              <Input
                type="text"
                name="current_wage"
                value={current_wage}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="employment_status">Status</Label>
              <Select
                type="text"
                name="employment_status"
                value={employment_status}
                onChange={(e) => this.handleChange(e)}
              >
                <Option>Select</Option>
                <Option>Full-time</Option>
                <Option>Part-time</Option>
                <Option>Seasonal</Option>
                <Option>Contract</Option>
                <Option>Temporary</Option>
                <Option>Terminated</Option>
              </Select>
              <Label htmlFor="pto_level">Personal Time Off</Label>
              <Input
                type="text"
                name="pto_level"
                value={pto_level}
                onChange={(e) => this.handleChange(e)}
              />

              <FormSection>Driver Status</FormSection>
              <Label htmlFor="drivers_license_number">
                Driver's Licence Number
              </Label>
              <Input
                type="text"
                name="drivers_license_number"
                value={drivers_license_number}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="drivers_license_state">
                Driver's License State
              </Label>
              <Input
                type="text"
                name="drivers_license_state"
                value={drivers_license_state}
                onChange={(e) => this.handleChange(e)}
              />

              <FormSection>Tax Information</FormSection>
              <Label htmlFor="citizenship">Citizenship</Label>
              <Input
                type="text"
                name="citizenship"
                value={citizenship}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="irs_marital_status">Marital Status</Label>
              <Input
                type="text"
                name="irs_marital_status"
                value={irs_marital_status}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="irs_allowances">Allowances</Label>
              <Input
                type="text"
                name="irs_allowances"
                value={irs_allowances}
                onChange={(e) => this.handleChange(e)}
              />
              <Label htmlFor="irs_withheld">Additional Withholdings</Label>
              <Input
                type="text"
                name="irs_withheld"
                value={irs_withheld}
                onChange={(e) => this.handleChange(e)}
              />

              <Submit type="submit" value="Add Employee" />
            </Form>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default New;
