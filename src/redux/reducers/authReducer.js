import { isEmpty } from "../../shared/helpers/validationHelpers";

import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  AUTH_ERRORS,
  CLEAR_MESSAGES,
  IS_LOADING,
  IS_LOADING_FALSE,
  SHOW_AUTH_MSG,
  CLEAR_AUTH_MSG,
} from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  showAuthMsg: false,
  isLoading: false,
  isPasswordReset: false,
  errorMsg: null,
  successMsg: null,
  isLogged: false,
  user: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
        isLoading: false,
        role: payload.role,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        isLoading: false,
        errorMsg: null,
        successMsg: null,
        isPasswordReset: false,
      };
    case AUTH_ERRORS:
      return { ...state, errorMsg: payload, isLoading: false };
    case CLEAR_MESSAGES:
      return { ...state, successMsg: "", errorMsg: "", showAuthMsg: false };
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case SHOW_AUTH_MSG:
      return { ...state, showAuthMsg: true };
    case CLEAR_AUTH_MSG:
      return { ...state, showAuthMsg: false };
    default:
      return state;
  }
}
