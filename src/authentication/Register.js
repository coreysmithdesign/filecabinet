import React from "react";
import Layout from "./Layout";

export default function Register() {
  return (
    <Layout>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}
