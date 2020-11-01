import React from "react";
import classNames from "classnames";

const PriorityGuage = ({ todos, priority }) => {
  let selectedTodo = [];
  const amountClass = classNames({
    "user__table-amount": true,
    "user__table-amount--medium": priority === "MEDIUM",
    "user__table-amount--low": priority === "LOW",
  });

  switch (priority) {
    case "HIGH":
      selectedTodo = todos.filter((todo) => todo.priority === priority);
      break;
    case "MEDIUM":
      selectedTodo = todos.filter((todo) => todo.priority === priority);
      break;
    case "LOW":
      selectedTodo = todos.filter((todo) => todo.priority === priority);
      break;
    default:
      break;
  }

  if (priority === "HIGH") {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <span>{selectedTodo.length}</span>
      </div>
    );
  }
  if (priority === "MEDIUM") {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <span>{selectedTodo.length}</span>
      </div>
    );
  }
  return (
    <div className={amountClass}>
      <div />
      <span>{selectedTodo.length}</span>
    </div>
  );
};

export default PriorityGuage;
