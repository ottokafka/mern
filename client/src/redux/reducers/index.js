import { combineReducers } from "redux";
import alert from "./alert";
import authBusiness from "./authBusiness";

export default combineReducers({
  alert,
  authBusiness
});
