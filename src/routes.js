import React from "react";
import { Switch, Route } from "react-router";
import requireAuth from "./utils/requireAuth";
import Welcome from "./authentication/Welcome";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import NewDocument from "./documents/NewDocument";
import Document from "./documents/Document";
import Documents from "./documents/Documents";
import NewEmployee from "./employees/NewEmployee";
import Employees from "./employees/Employees";
import Employee from "./employees/Employee";
import NewBusiness from "./businesses/NewBusiness";
import Businesses from "./businesses/Businesses";
import Business from "./businesses/Business";
import Profile from "./profile/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/login/" component={Login} />
    <Route path="/register/" component={Register} />
    <Route path="/documents/new" component={requireAuth(NewDocument)} />
    <Route path="/documents/:id/" component={requireAuth(Document)} />
    <Route path="/documents/" component={requireAuth(Documents)} />
    <Route path="/employees/new" component={requireAuth(NewEmployee)} />
    <Route path="/employee/:id/" component={requireAuth(Employee)} />
    <Route path="/employees/" component={requireAuth(Employees)} />
    <Route path="/businesses/new" component={requireAuth(NewBusiness)} />
    <Route path="/business/:id/" component={requireAuth(Business)} />
    <Route path="/businesses/" component={requireAuth(Businesses)} />
    <Route path="/profile/" component={requireAuth(Profile)} />
  </Switch>
);
