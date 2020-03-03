import {
  GET_PROFILE_BUSINESS,
  PROFILE_ERROR_BUSINESS,
  CLEAR_PROFILE_BUSINESS,
  UPDATE_PROFILE_BUSINESS,
  AVAILABILITY,
  SERVICES
} from "../types";

const initialState = {
  profileBusiness: null,
  availability: null,
  services: null,
  profiles: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE_BUSINESS:
      // case UPDATE_PROFILE_BUSINESS:
      return {
        ...state,
        profileBusiness: payload
      };

    case AVAILABILITY:
      return {
        ...state,
        availability: true
      };

    case SERVICES:
      return {
        ...state,
        services: true
      };

    case UPDATE_PROFILE_BUSINESS:
      return {
        ...state,
        profileBusiness: payload
      };

    case PROFILE_ERROR_BUSINESS:
      return {
        ...state,
        error: payload,
        profileBusiness: null
      };
    case CLEAR_PROFILE_BUSINESS:
      return {
        ...state,
        profileBusiness: null
      };

    default:
      return state;
  }
}
