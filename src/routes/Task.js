import React from "react";
import { Route, Switch } from "react-router-dom";

import Todo from "../pages/Task/Todo/Todo";
import MainView from "../shared/layouts/MainView/MainView";

export default () => (
  <Switch>
    <MainView>
      <Route exact path="/task" component={Todo} />
      <Route exact path="/task/todo" component={Todo} />
    </MainView>
  </Switch>
);
