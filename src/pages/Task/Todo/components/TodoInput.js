import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import PlusIcon from "mdi-react/PlusIcon";
import TodoModal from "./TodoModal";
import { actions } from "react-redux-toastr";

const todoFormInit = {
  title: "",
  description: "",
  priority: "LOW",
  dueDate: new Date(),
  state: "TODO",
};

function init(todoFormInit) {
  return todoFormInit;
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

const todoSidebarImg = `${process.env.PUBLIC_URL}/assets/icon/sidebar_img.svg`;

const TodoInput = ({ theme, rtl, togglePriorityFilter, action }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoForm, dispatchFormState] = useReducer(
    todoFormReducer,
    todoFormInit,
    init
  );

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePriorityFilterChange = (event) => {
    dispatch(togglePriorityFilter(event.target.value));
  };

  return (
    <div className="todo__input-new">
      <div className="todo__sidebar">
        <img
          className="todo_sidebar-image"
          src={todoSidebarImg}
          alt="sidebar-img"
        />
        <Button className="todo__btn-add-new" onClick={toggle}>
          <PlusIcon /> New task
        </Button>
        <div className="todo__priority-filter">
          <p className="title">Priority</p>
          <ul className="todo__priority-filter-list">
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-all"
                name="priority-filter"
                value=""
                onClick={handlePriorityFilterChange}
                defaultChecked
              />
              <label htmlFor="priority-all">All</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-low"
                name="priority-filter"
                value="LOW"
                onClick={handlePriorityFilterChange}
              />
              <label htmlFor="priority-low">Low</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-medium"
                name="priority-filter"
                value="MEDIUM"
                onClick={handlePriorityFilterChange}
              />
              <label htmlFor="priority-medium">Medium</label>
            </li>
            <li>
              <input
                className="todo__filter-radio"
                type="radio"
                id="priority-high"
                name="priority-filter"
                value="HIGH"
                onClick={handlePriorityFilterChange}
              />
              <label htmlFor="priority-high">High</label>
            </li>
          </ul>
        </div>
      </div>
      <TodoModal
        isOpen={isModalOpen}
        toggle={toggle}
        theme={theme}
        rtl={rtl}
        todoForm={todoForm}
        dispatchForm={dispatchFormState}
        todoFormInit={todoFormInit}
        action={action}
      />
    </div>
  );
};
export default TodoInput;
