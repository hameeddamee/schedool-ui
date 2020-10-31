import { isEmpty } from "../../shared/helpers/validationHelpers";
import { setCurrentUser } from "./authActions";
import config from "../../config";
import { setURLParams, getData } from "../../shared/helpers/apiAccessHelpers";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";
export const GET_PROFILE = "GET_PROFILE";
export const CLEAR_USER = "CLEAR_USER";
export const PROFILE_ERROR = "PROFILE_ERROR";

export const getUserProfile = () => async (dispatch) => {
  dispatch(clearAgentStat());
  dispatch(clearUser());
  dispatch(setIsLoading());

  try {
    const url = `${config.Urls.base}/user/profile?`;
    const token = localStorage.getItem("jwtToken");
    const urlParams = await setURLParams(url);

    const res = await postData(urlParams, header, regData);

    dispatch(setCurrentUser({}));

    dispatch({
      type: GET_PROFILE,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.message,
    });
  }
};

const loadingUserInfo = () => ({
  type: LOADING_USER_INFO,
});

const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  payload: data,
});

const clearAgentStat = () => ({
  type: CLEAR_AGENT_STATS,
});
const setIsLoading = () => ({
  type: SET_USER_LOADING,
});
const clearUser = () => ({
  type: CLEAR_USER,
});
