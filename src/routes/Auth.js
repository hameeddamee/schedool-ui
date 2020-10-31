import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../pages/Auth/Signup/Signup";
// import Login from "../pages/Auth/Login/Login";
// import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
// import SelectUser from "../pages/Auth/SelectUser/SelectUserRole";
// import SignupSuccess from "../pages/Auth/SignupSuccess/SignupSuccess";
// import ForgetPasswordSuccess from "../pages/Auth/ForgetPasswordSuccess/ForgetPasswordSuccess";
// import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
// import ConfirmPasswordSuccess from "../pages/Auth/ConfirmPasswordSuccess/ConfirmPasswordSuccess";

export default () => (
  <Switch>
    {/* <Route exact path="/" component={Login} /> */}
    <Route exact path="/auth/signup" component={Signup} />
    {/* <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/forgot-password" component={ForgotPassword} />
    <Route exact path="/auth/select-user" component={SelectUser} />
    <Route exact path="/auth/signup-success" component={SignupSuccess} />
    <Route
      exact
      path="/auth/forgot-password-success"
      component={ForgetPasswordSuccess}
    />
    <Route
      exact
      path="/auth/confirm-password-success"
      component={ConfirmPasswordSuccess}
    />
    <Route exact path="/auth/reset-password/:token" component={ResetPassword} /> */}
  </Switch>
);
