import { combineReducers } from "redux";
import group from "./admin";
import authReducer from "./auth";
import currentProfile from "./currentProfile";

export default combineReducers({
  group,
  authReducer,
  currentProfile,
});
