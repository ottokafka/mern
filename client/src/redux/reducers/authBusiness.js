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
  token: localStorage.getItem("token"),
  isAuthenticatedBusiness: null,
  loading: true,
  business: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticatedBusiness: true,
        loading: false,
        business: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedBusiness: true,
        loading: false,
        business: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedBusiness: true,
        loading: false,
        business: payload
      };
    case ACCOUNT_DELETED:
      return {
        ...state,
        token: null,
        isAuthenticatedBusiness: false,
        loading: false,
        business: null
      };
    case LOGOUT:
      return {
        ...state,
        token: localStorage.removeItem("token"),
        isAuthenticatedBusiness: false,
        loading: false,
        business: null
      };
    default:
      return state;
  }
}
