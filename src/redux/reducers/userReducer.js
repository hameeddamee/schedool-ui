import {
  SET_USERS,
  USER_ERRORS,
  IS_LOADING,
  IS_LOADING_FALSE,
  CLEAR_MESSAGES,
} from "../actions/userActions";

const initialState = {
  all: [],
  selected: {},
  isLoading: false,
  errorMsg: null,
  successMsg: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return Object.assign({}, state, {
        all: payload,
      });

    case USER_ERRORS:
      return { ...state, errorMsg: payload, isLoading: false };
    case CLEAR_MESSAGES:
      return { ...state, successMsg: "", errorMsg: "" };
    case IS_LOADING:
      return { ...state, isLoading: true };
    case IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
