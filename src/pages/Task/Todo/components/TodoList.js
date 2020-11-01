import React from "react";
import classNames from "classnames";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, actions, completed, theme, rtl }) => {
  const todoListClass = classNames({
    "todo__item-comleted": completed,
  });

  return todos.map((todo) => (
    <div xs={12} key={todo.id} className={todoListClass}>
      <TodoItem todo={todo} actions={actions} theme={theme} rtl={rtl} />
    </div>
  ));
};
export default TodoList;
