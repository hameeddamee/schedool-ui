import {
  postData,
  getData,
  deleteData,
  setURLParams,
  getBaseURL,
} from "../../shared/helpers/apiAccessHelpers";
export const SET_USERS = "SET_USERS";
export const USER_ERRORS = "USER_ERRORS";
export const IS_LOADING = "IS_LOADING";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/user/get-all`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await getData(urlParams, header);

    dispatch(setLoadingFalse());
    dispatch({ type: SET_USERS, payload: res.content });
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
      payload: err.message,
    });
  }
};

export const editUser = (userData, history) => async (dispatch, getState) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/user/edit/${userData.id}`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await postData(urlParams, header, userData);
    dispatch(setLoadingFalse());
    const users = getState().user.all.filter(
      (user) => user.id !== res.content.id
    );
    dispatch({ type: SET_USERS, payload: [res.content, ...users] });
    history.push("/user");
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
      payload: err.message,
    });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/user/remove/${userId}`);
    const urlParams = await setURLParams(url);
    const token = localStorage.getItem("jwtToken");
    const header = {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
    const res = await deleteData(urlParams, header);
    dispatch(setLoadingFalse());
    dispatch({ type: SET_USERS, payload: res.content });
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
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
