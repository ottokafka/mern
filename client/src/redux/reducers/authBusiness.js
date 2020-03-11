import {
  BUSINESS_LOADED,
  REGISTER_BUSINESS_SUCCESS,
  LOGIN_BUSINESS_SUCCESS,
  BUSINESS_ACCOUNT_DELETED,
  LOGOUT_BUSINESS
} from "../types";

const initialState = {
  tokenBusiness: localStorage.getItem("tokenBusiness"),
  isAuthenticatedBusiness: false,
  business: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BUSINESS_LOADED:
      return {
        ...state,
        isAuthenticatedBusiness: true,
        business: payload
      };
    case REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
        ...payload,
        business: payload
      };
    case LOGIN_BUSINESS_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedBusiness: true,
        business: payload
      };
    case BUSINESS_ACCOUNT_DELETED:
      return {
        ...state,
        tokenBusiness: localStorage.removeItem("tokenBusiness"),
        isAuthenticatedBusiness: false,
        business: null
      };
    case LOGOUT_BUSINESS:
      return {
        ...state,
        tokenBusiness: localStorage.removeItem("tokenBusiness"),
        isAuthenticatedBusiness: false,
        business: null
      };
    default:
      return state;
  }
}
