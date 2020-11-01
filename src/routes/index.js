import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import Auth from "./Auth";
import Landing from "./Landing";
import Task from "./Task";

const AppRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute exact path="/" component={Landing}></PublicRoute>
        <PublicRoute path="/auth" component={Auth}></PublicRoute>
        <PublicRoute path="/landing" component={Landing}></PublicRoute>
        <PrivateRoute path="/task" component={Task}></PrivateRoute>
      </Switch>
    </Fragment>
  );
};

export default AppRoutes;
