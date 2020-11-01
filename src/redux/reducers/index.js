import { combineReducers } from "redux";
import { reducer as toastReducer } from "react-redux-toastr";

import authReducer from "./authReducer";
import rtlReducer from "./rtlReducer";
import sidebarReducer from "./sidebarReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  notification: toastReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
  user: userReducer,
  auth: authReducer,
  task: taskReducer,
  rtl: rtlReducer,
});
