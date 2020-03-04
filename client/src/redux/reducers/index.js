import { combineReducers } from "redux";
import alert from "./alert";
import authBusiness from "./authBusiness";
import authUser from "./authUser";
import profileUser from "./profileUser";
import profileBusiness from "./profileBusiness";
import searchReducer from "./searchReducer";

export default combineReducers({
  alert,
  authBusiness,
  authUser,
  profileUser,
  profileBusiness,
  searchReducer
});
