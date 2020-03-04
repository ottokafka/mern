import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  //AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from "../types";

const initialState = {
  tokenUser: localStorage.getItem("tokenUser"),
  isAuthenticatedUser: false,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticatedUser: true,
        user: payload
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedUser: true,
        user: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedUser: true,
        user: payload
      };
    case ACCOUNT_DELETED:
      return {
        ...state,
        tokenUser: null,
        isAuthenticatedUser: false,
        user: null
      };
    case LOGOUT:
      return {
        ...state,
        tokenUser: localStorage.removeItem("tokenUser"),
        isAuthenticatedUser: false,
        user: null
      };
    default:
      return state;
  }
}
