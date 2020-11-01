import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
// import { useTranslation } from "react-i18next";
// import { dispatch, useSelector } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import todoActions from "../../redux/actions/todoActions";

const Todo = () => {
  // const state = useSelector(state => state.state)

  // GET TODOS FROM STATE
  // const todos = state.todos.priorityFilter
  //   ? state.todos.todos.filter(
  //       (todo) => todo.priority === state.todos.priorityFilter
  //     )
  //   : state.todos.todos;
  // return { todos, theme: state.theme, rtl: state.rtl };

  // GET INCOMPLETETODOS FROM STATE
  // this.state = {
  //   incompleteTodos: props.todos.filter((todo) => !todo.completed),
  //   completedTodos: props.todos.filter((todo) => todo.completed),
  // };

  // CALL ACTIONS
  // todoActions

  return (
    <Container className="todo-app">
      <Row>
        <Col md={12}>
          {/* <h3 className="page-title">{t("todo_application.page_title")}</h3> */}
        </Col>
      </Row>
      <Row>
        <Col md={9} xl={10}>
          <TodoList
          // actions={actions}
          // todos={incompleteTodos}
          />
          <Col md={12}>
            <div className="todo-app__divider">
              <div className="todo-app__divider-line" />
              <p className="todo-app__divider-title">Done</p>
              <div className="todo-app__divider-line" />
            </div>
          </Col>
          <TodoList
          // completed
          // actions={actions}
          // todos={completedTodos}
          />
        </Col>
        <Col md={3} xl={2}>
          <TodoInput
          // addTodo={actions.addTodo}
          // togglePriorityFilter={actions.togglePriorityFilter}
          // theme={theme}
          // rtl={rtl.direction}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
