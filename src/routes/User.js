import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "../pages/User/All/User";
import Edit from "../pages/User/Edit/Edit";
export default () => (
  <Switch>
    <Route exact path="/user" component={User} />
    <Route exact path="/user/all" component={User} />
    <Route exact path="/user/edit/:userId" component={Edit} />
  </Switch>
);
