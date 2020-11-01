import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as todoActions from "../../../redux/actions/taskActions";
import todoAction from "../../../redux/actions/taskActions";
import Spinner from "../../../shared/components/Spinner/Spinner";

const Todo = () => {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.task.todos);
  const theme = useSelector((state) => state.theme);
  const rtl = useSelector((state) => state.rtl);
  const incompleteTodos = useSelector((state) =>
    state.task.priorityFilter
      ? state.task.incompleteTodos.filter(
          (todo) => todo.priority === state.task.priorityFilter
        )
      : state.task.incompleteTodos
  );

  const completedTodos = useSelector((state) =>
    state.task.priorityFilter
      ? state.task.completedTodos.filter(
          (todo) => todo.priority === state.task.priorityFilter
        )
      : state.task.completedTodos
  );
  const errorMsg = useSelector((state) => state.task.errorMsg);
  const isLoading = useSelector((state) => state.task.isLoading);

  useEffect(() => {
    dispatch(todoActions.fetchAllTodos());
  }, []);

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Todo error", errorMsg, {
        onHideComplete: () => dispatch(todoActions.clearMessages()),
      });
    }
  }, [errorMsg]);

  return (
    <Container className="todo-app">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("task.heading")}</h3>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Col md={9} xl={10}>
            <Spinner />
          </Col>
        ) : (
          <Col md={9} xl={10}>
            <TodoList
              actions={todoActions}
              todos={incompleteTodos}
              theme={theme}
              rtl={rtl.direction}
            />
            <Col md={12}>
              <div className="todo-app__divider">
                <div className="todo-app__divider-line" />
                <p className="todo-app__divider-title">Done</p>
                <div className="todo-app__divider-line" />
              </div>
            </Col>
            <TodoList
              completed
              actions={todoActions}
              todos={completedTodos}
              theme={theme}
              rtl={rtl.direction}
            />
          </Col>
        )}

        <Col md={3} xl={2}>
          <TodoInput
            action={todoActions.addTodo}
            togglePriorityFilter={todoAction.togglePriorityFilter}
            theme={theme}
            rtl={rtl.direction}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
