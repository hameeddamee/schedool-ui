import {
  postData,
  getData,
  deleteData,
  setURLParams,
  getBaseURL,
} from "../../shared/helpers/apiAccessHelpers";

export const SET_TODOS = "SET_TODOS";
export const TASK_ERRORS = "TASK_ERRORS";
export const IS_LOADING = "IS_LOADING";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

const todoActions = {
  completeTodo(id) {
    return {
      type: "COMPLETE_TODO",
      id,
    };
  },
  togglePriorityFilter(priorityFilter) {
    return {
      type: "PRIORITY_FILTER",
      priorityFilter,
    };
  },
};

export const fetchAllTodos = () => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/todo/all`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await getData(urlParams, header);
    dispatch(setLoadingFalse());
    dispatch({ type: SET_TODOS, payload: res.content });
  } catch (err) {
    dispatch({
      type: TASK_ERRORS,
      payload: err.message,
    });
  }
};
export const addTodo = (todoData) => async (dispatch, getState) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/todo/create`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await postData(urlParams, header, todoData);
    dispatch(setLoadingFalse());
    const todos = getState().task.todos;
    dispatch({ type: SET_TODOS, payload: [res.content, ...todos] });
  } catch (err) {
    dispatch({
      type: TASK_ERRORS,
      payload: err.message,
    });
  }
};

export const editTodo = (todoData) => async (dispatch, getState) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/todo/edit/${todoData.id}`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await postData(urlParams, header, todoData);
    dispatch(setLoadingFalse());
    const todos = getState().task.todos.filter(
      (todo) => todo.id !== res.content.id
    );
    dispatch({ type: SET_TODOS, payload: [res.content, ...todos] });
  } catch (err) {
    dispatch({
      type: TASK_ERRORS,
      payload: err.message,
    });
  }
};
export const setTodoState = (todoData) => async (dispatch, getState) => {
  try {
    todoData.state = todoData.state === "DONE" ? "TODO" : "DONE";
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/todo/edit/${todoData.id}`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await postData(urlParams, header, todoData);
    dispatch(setLoadingFalse());
    const todos = getState().task.todos.filter(
      (todo) => todo.id !== res.content.id
    );
    dispatch({ type: SET_TODOS, payload: [res.content, ...todos] });
  } catch (err) {
    dispatch({
      type: TASK_ERRORS,
      payload: err.message,
    });
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/todo/remove/${todoId}`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await deleteData(urlParams, header);
    dispatch(setLoadingFalse());
    dispatch({ type: SET_TODOS, payload: res.content });
  } catch (err) {
    dispatch({
      type: TASK_ERRORS,
      payload: err.message,
    });
  }
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};
export const setLoading = () => ({
  type: IS_LOADING,
});
export const setLoadingFalse = () => ({
  type: IS_LOADING_FALSE,
});

export default todoActions;
