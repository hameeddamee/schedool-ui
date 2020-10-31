import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./guards/PublicRoute";
import Auth from "./Auth";
import Landing from "./Landing";

const AppRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute exact path="/" component={Landing}></PublicRoute>
        <PublicRoute path="/landing" component={Landing}></PublicRoute>
        <PublicRoute path="/auth" component={Auth}></PublicRoute>
      </Switch>
    </Fragment>
  );
};

export default AppRoutes;
