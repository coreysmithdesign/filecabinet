import React, { useState } from "react";
import Layout from "./layout/Layout";
import { Form, Label, Input } from "../global/Form";

export default function Register() {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`username: ${username}, password: ${password}, email: ${email}`);
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
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="submit" value="Submit" />
      </Form>
    </Layout>
  );
}
