import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducer";
import Layout from "./layout/Layout";
import { Form, Label, Input, Submit } from "../global/Form";

export default function Login(props) {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        username,
        password,
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
      <Form onSubmit={handleLogin}>
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
