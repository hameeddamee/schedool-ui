import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { reducer as toastReducer } from "react-redux-toastr";

import authReducer from "./authReducer";
import sidebarReducer from "./sidebarReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export default combineReducers({
  form: reduxFormReducer,
  notification: toastReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
  user: userReducer,
  auth: authReducer,
});
