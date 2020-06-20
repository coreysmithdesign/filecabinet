import React from "react";
import Layout from "./layout/Layout";

export default function Login() {
  return (
    <Layout>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}
