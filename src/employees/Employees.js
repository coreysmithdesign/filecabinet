import React, { Component } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import PageHeader from "../layout/PageHeader";
import PageContent from "../layout/PageContent";
import PageMain from "../layout/PageMain";
import { icon } from "../global/globals";
import { Table, TableHeader, TableRowLink, TableCell } from "../global/Table";

class Employees extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    console.log(this.state);
    const employeeList = this.state.employees.map((employee) => (
      <TableRowLink
        key={employee.employee_id}
        to={`/employees/${employee.employee_id}`}
      >
        <TableCell>
          {icon.folder} {employee.employee_name}
        </TableCell>
        <TableCell>{employee.position}</TableCell>
        <TableCell>{employee.employment_status}</TableCell>
        <TableCell>{employee.current_wage}</TableCell>
      </TableRowLink>
    ));

    return (
      <Layout>
        <PageHeader icon={icon.folders} title="Employees"></PageHeader>
        <PageContent>
          <PageMain>
            <Table>
              <TableHeader>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Wage</TableCell>
              </TableHeader>
              {employeeList}
            </Table>
          </PageMain>
        </PageContent>
      </Layout>
    );
  }
}

export default Employees;
