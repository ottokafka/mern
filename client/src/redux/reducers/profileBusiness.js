import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS
} from "../types";

const initialState = {
  profileBusiness: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profileBusiness: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profileBusiness: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profileBusiness: null,
        repos: [],
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    default:
      return state;
  }
}
