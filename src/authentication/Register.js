import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducer";
import axios from "axios";
import Layout from "./layout/Layout";
import { Form, Label, Input, Submit } from "../global/Form";

export default function Register(props) {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [full_name, setFullName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        username,
        password,
        email,
        full_name,
        business_name,
      })
      .then((res) => {
        dispatch(loginUser(res.data));
        props.history.push("/documents");
      })
      .catch((err) => {
        console.log(err);
        alert("Could not register");
      });
  };

  return (
    <Layout>
      <Form onSubmit={handleRegister}>
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
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          type="text"
          name="full_name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Label htmlFor="business_name">Business Name</Label>
        <Input
          type="text"
          name="business_name"
          value={business_name}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <Submit type="submit" value="Register" />
      </Form>
    </Layout>
  );
}
