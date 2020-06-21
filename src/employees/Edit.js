import React from "react";
import { Card, CardTitle } from "../global/Card";
import { Form, Label, Input, Select, Submit, Option } from "../global/Form";

export default function Edit(props) {
  return (
    <Card>
      <CardTitle>Information</CardTitle>
      <Form>
        <Label htmlFor="position">Position</Label>
        <Input type="text" name="position" />
        <Label htmlFor="wage">Wage</Label>
        <Input type="text" name="wage" />
        <Label htmlFor="status">Status</Label>
        <Select type="text" name="status">
          <Option>-select one-</Option>
          <Option>Full-time</Option>
          <Option>Part-time</Option>
          <Option>Seasonal</Option>
          <Option>Contract</Option>
          <Option>Temporary</Option>
          <Option>Terminated</Option>
        </Select>
        <Label htmlFor="date_of_hire">Date of Hire</Label>
        <Input type="date" name="date_of_hire" />
        <Label htmlFor="date_of_separation">Date of Separation</Label>
        <Input type="date" name="date_of_separation" />
        <Label htmlFor="pto_level">Personal Time Off</Label>
        <Input type="text" name="pto_level" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" />
        <Submit type="submit" value="Submit" />
      </Form>
    </Card>
  );
}
