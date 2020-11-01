import {
  SET_TODOS,
  TASK_ERRORS,
  IS_LOADING,
  IS_LOADING_FALSE,
  CLEAR_MESSAGES,
} from "../actions/taskActions";
const initialState = {
  todos: [],
  incompleteTodos: [],
  completedTodos: [],
  priorityFilter: "",
  Filter: "",
  isLoading: false,
  errorMsg: null,
  successMsg: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      let incompleteTodos;
      let completedTodos;
      const todos = action.payload;
      if (todos.length > 0) {
        incompleteTodos = todos.filter((todo) => todo.state === "TODO");
        completedTodos = todos.filter((todo) => todo.state === "DONE");
      }
      return Object.assign({}, state, {
        todos: todos,
        incompleteTodos,
        completedTodos,
      });
    case "COMPLETE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? Object.assign({}, todo, {
                updated: "TODO",
                state: todo.state === "DONE" ? "TODO" : "DONE",
              })
            : todo
        ),
      });
    case "PRIORITY_FILTER":
      return Object.assign({}, state, {
        priorityFilter: action.priorityFilter,
      });
    case TASK_ERRORS:
      return { ...state, errorMsg: action.payload, isLoading: false };
    case CLEAR_MESSAGES:
      return { ...state, successMsg: "", errorMsg: "" };
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default todoReducer;
