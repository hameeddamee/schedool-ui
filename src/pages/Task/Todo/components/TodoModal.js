import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { Button, ButtonToolbar, Modal } from "reactstrap";
import classNames from "classnames";

const priorityOptions = [
  { value: "HIGH", label: "High" },
  { value: "MEDIUM", label: "Medium" },
  { value: "LOW", label: "Low" },
];

const TodoModal = ({
  isOpen,
  toggle,
  theme,
  rtl,
  todoForm,
  dispatchForm,
  todoFormInit,
  action,
}) => {
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatchForm({ type: "title", payload: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    dispatchForm({ type: "description", payload: event.target.value });
  };

  const handleDateChange = (date) => {
    dispatchForm({ type: "dueDate", payload: date });
  };

  const handlePriorityChange = (event) => {
    dispatchForm({ type: "priority", payload: event.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoForm.title !== "") {
      toggle();
      dispatch(action(todoForm));
      dispatchForm({ type: "reset", payload: todoFormInit });
    }
  };

  const modalClasses = classNames(
    {
      "todo__add-modal": true,
    },
    theme.className,
    `${rtl}-support`
  );
  return (
    <Modal isOpen={isOpen} toggle={toggle} className={modalClasses}>
      <div className="form">
        <div className="form__form-group">
          <span className="form__form-group-label typography-message">
            Title
          </span>
          <div className="form__form-group-field">
            <input
              type="text"
              placeholder="title.."
              required
              value={todoForm.title}
              onChange={handleTitleChange}
            />
          </div>
        </div>

        <div className="form__form-group">
          <span className="form__form-group-label">Description</span>
          <div className="form__form-group-field">
            <textarea
              placeholder="what to do.."
              required
              value={todoForm.description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>

        <div className="form__form-group">
          <span className="form__form-group-label">Due Date</span>
          <div className="form__form-group-field priority">
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={todoForm.dueDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="form__form-group">
          <span className="form__form-group-label">Priority</span>
          <div className="form__form-group-field priority">
            <Select
              options={priorityOptions}
              onChange={handlePriorityChange}
              defaultValue={
                priorityOptions.filter(
                  (priority) => todoForm.priority === priority.value
                )[0]
              }
            />
          </div>
        </div>

        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit" onClick={handleSubmit}>
            Add
          </Button>
          <Button type="button" onClick={toggle}>
            Cancel
          </Button>
        </ButtonToolbar>
      </div>
    </Modal>
  );
};

export default TodoModal;
