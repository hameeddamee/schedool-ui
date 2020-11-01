import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // static propTypes = {
  //   actions: PropTypes.shape({
  //     editTodo: PropTypes.func,
  //     completeTodo: PropTypes.func,
  //     deleteTodo: PropTypes.func,
  //   }).isRequired,
  //   todos: PropTypes.arrayOf(todoCard).isRequired,
  //   completed: PropTypes.bool,
  // };

  // static defaultProps = {
  //   completed: false,
  // };

  // const { todos, actions, completed } = this.props;

  const todoListClass = classNames({
    // "todo__item-comleted": completed,
  });

  // return todos.map((todo) => (
  return (
    <div
      xs={12}
      // key={todo.id}
      className={todoListClass}
    >
      <TodoItem
      // todo={todo}
      // actions={actions}
      />
    </div>
    // )
  );
};
export default TodoList;
