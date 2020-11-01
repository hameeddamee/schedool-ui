import jwt_decode from "jwt-decode";
import {
  postData,
  setURLParams,
  getBaseURL,
} from "../../shared/helpers/apiAccessHelpers";
export const AUTH_ERRORS = "AUTH_ERRORS";
export const IS_LOADING = "IS_LOADING";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";
export const SHOW_AUTH_MSG = "SHOW_AUTH_MSG";
export const CLEAR_AUTH_MSG = "CLEAR_AUTH_MSG";

export const checkAuthState = () => (dispatch) => {
  dispatch({ type: CLEAR_AUTH_MSG });

  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;

    dispatch(setCurrentUser(JSON.parse(localStorage.user)));

    if (decoded.exp < currentTime) {
      dispatch(logoutUser());
      dispatch(setCurrentUser({}));
      window.location.href = "/login";
    }
  }
};

export const registerUser = (regData, history) => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/user/sign-up`);
    const urlParams = await setURLParams(url);
    const header = {
      "Content-Type": "application/json",
    };
    const res = await postData(urlParams, header, regData);
    dispatch(setLoadingFalse());
    dispatch({ type: SHOW_AUTH_MSG });
    history.push("/auth/signup-success");
  } catch (err) {
    dispatch({
      type: AUTH_ERRORS,
      payload: err.message,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch(clearMessages());
    dispatch(setLoading());
    const baseUrl = getBaseURL();
    const url = new URL(`${baseUrl}/user/login`);
    const urlParams = await setURLParams(url);
    const header = {
      "Content-Type": "application/json",
    };

    const resData = await postData(urlParams, header, formData);
    localStorage.setItem("jwtToken", resData.content.token);
    localStorage.setItem("user", JSON.stringify(resData.content.user));
    dispatch(setCurrentUser(resData.content.user));
  } catch (err) {
    dispatch({
      type: AUTH_ERRORS,
      payload: err.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
  dispatch(clearCurrentUser());
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

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
  };
};
