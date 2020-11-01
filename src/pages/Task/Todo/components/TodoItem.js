import React, { useReducer, useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import NotebookEditIcon from "mdi-react/NotebookEditIcon";
import classNames from "classnames";
import TodoModal from "./TodoModal";

function init(todoFormState) {
  return { ...todoFormState, dueDate: new Date(todoFormState.dueDate) };
}

const todoFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "title":
      return { ...state, title: payload };
    case "description":
      return { ...state, description: payload };
    case "priority":
      return { ...state, priority: payload };
    case "dueDate":
      return { ...state, dueDate: payload };
    case "reset":
      return init(payload);
    default:
      return state;
  }
};

const TodoItem = ({ actions, todo, theme, rtl }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector((state) => state.task.isLoading);
  const [todoForm, dispatchFormState] = useReducer(todoFormReducer, todo, init);
  const { title, state, description, priority, dueDate } = todo;
  const [isChecked, setIsChecked] = useState(state === "DONE");

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleComplete = () => {
    setIsChecked(() => {
      dispatch(actions.setTodoState(todo));
      return !isChecked;
    });
  };

  const handleDelete = () => {
    dispatch(actions.deleteTodo(todo.id));
  };

  const priorityColorsClass = classNames({
    "todo__priority-indicator": true,
    low: priority === "LOW",
    medium: priority === "MEDIUM",
    high: priority === "HIGH",
  });

  return (
    <Card>
      <CardBody className="todo__item">
        <label htmlFor={title} className="todo__label-checkbox">
          {!isLoading && (
            <input
              id={title}
              type="checkbox"
              className="todo__complete-toggle"
              defaultChecked={isChecked}
              required
              onClick={() => handleComplete(todo)}
            />
          )}
          <span className="checkbox-indicator" />
        </label>
        <div className="todo__info">
          <div className="todo__header">
            <h3>{title}</h3>
            <div className="todo__additional">
              <p className="todo__due-date">Due date: {dueDate}</p>
              <span className="todo__priority">Priority:</span>
              <span className={priorityColorsClass} />
            </div>
          </div>
          <div className="todo__content">
            <div className="todo__description">{description}</div>
            <div>
              <button className="todo__edit-btn" type="button" onClick={toggle}>
                <NotebookEditIcon />
              </button>
              <button
                className="todo__delete-btn"
                type="button"
                onClick={handleDelete}
              >
                <DeleteForeverIcon />
              </button>
            </div>
          </div>
        </div>
        <TodoModal
          isOpen={isModalOpen}
          toggle={toggle}
          theme={theme}
          rtl={rtl}
          todoForm={todoForm}
          dispatchForm={dispatchFormState}
          todoFormInit={todo}
          action={actions.editTodo}
        />
      </CardBody>
    </Card>
  );
};
export default TodoItem;
