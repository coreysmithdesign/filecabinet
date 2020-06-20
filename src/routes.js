import React from "react";
import { Switch, Route } from "react-router";
import Welcome from "./authentication/Welcome";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Documents from "./documents/Documents";
import Document from "./documents/Document";
import Employees from "./employees/Employees";
import Employee from "./employees/Employee";
import Businesses from "./businesses/Businesses";
import Business from "./businesses/Business";
import Profile from "./profile/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/login/" component={Login} />
    <Route path="/register/" component={Register} />
    <Route path="/documents/:id/" component={Document} />
    <Route path="/documents/" component={Documents} />
    <Route path="/employees/:id/" component={Employee} />
    <Route path="/employees/" component={Employees} />
    <Route path="/businesses/:id/" component={Business} />
    <Route path="/businesses/" component={Businesses} />
    <Route path="/profile/" component={Profile} />
  </Switch>
);
