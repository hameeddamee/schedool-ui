import React from "react";
import { Route, Switch } from "react-router-dom";

import Todo from "../pages/Task/Todo/Todo";

export default () => (
  <Switch>
    <Route exact path="/task" component={Todo} />
    <Route exact path="/task/todo" component={Todo} />
  </Switch>
);
