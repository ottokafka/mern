import { SET_CURRENT_BUSINESS } from "../types";

const initialState = {
  isAuthenticated: false,
  business: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_BUSINESS:
      return {
        ...state,
        isAuthenticated: action.payload,
        business: action.payload
      };
    default:
      return state;
  }
}
