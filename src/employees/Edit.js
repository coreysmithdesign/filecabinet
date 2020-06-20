import React from "react";
import styled from "styled-components";
import { Card, CardTitle } from "../global/Card";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin: 0.5rem 0 0.25rem;
`;

const Input = styled.input`
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
`;

const Submit = styled.input`
  width: inherit;
  margin-top: 1rem;
`;

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
          <option>-select one-</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Seasonal</option>
          <option>Contract</option>
          <option>Temporary</option>
          <option>Terminated</option>
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
