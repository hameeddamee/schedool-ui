import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import MainView from "../shared/layouts/MainView/MainView";
import Auth from "./Auth";
import Landing from "./Landing";
import Task from "./Task";
import User from "./User";

const AppRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute exact path="/" component={Landing}></PublicRoute>
        <PublicRoute path="/auth" component={Auth}></PublicRoute>
        <PublicRoute path="/landing" component={Landing}></PublicRoute>
        <MainView>
          <PrivateRoute path="/task" component={Task}></PrivateRoute>
          <PrivateRoute path="/user" component={User}></PrivateRoute>
        </MainView>
      </Switch>
    </Fragment>
  );
};

export default AppRoutes;
