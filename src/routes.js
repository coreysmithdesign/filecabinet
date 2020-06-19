import React from "react";
import { Switch, Route } from "react-router";
import Welcome from "./authentication/Welcome";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Documents from "./pages/Documents";
import Document from "./pages/Document";
import Employees from "./pages/Employees";
import Employee from "./pages/Employee";
import Businesses from "./pages/Businesses";
import Business from "./pages/Business";
import Profile from "./pages/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/documents/:id" component={Document} />
    <Route path="/documents" component={Documents} />
    <Route path="/employees/:id" component={Employee} />
    <Route path="/employees" component={Employees} />
    <Route path="/businesses/:id" component={Business} />
    <Route path="/businesses" component={Businesses} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
