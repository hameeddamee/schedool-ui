import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../pages/Auth/Signup/Signup";
import SignupSuccess from "../pages/Auth/SignupSuccess/SignupSuccess";
import Login from "../pages/Auth/Login/Login";

export default () => (
  <Switch>
    <Route exact path="/auth" component={Login} />
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={Signup} />
    <Route exact path="/auth/signup-success" component={SignupSuccess} />
  </Switch>
);
