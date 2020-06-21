import React, { useState } from "react";
import Layout from "./layout/Layout";
import { Form, Label, Input, Submit } from "../global/Form";

export default function Login() {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`username: ${username}, password: ${password}`);
  };

  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <Submit type="submit" value="Submit" />
      </Form>
    </Layout>
  );
}
