import { SEARCH_CITY, SEARCH_ZIP } from "../types";

const initialState = {
  searched: null,
  cityResults: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ZIP:
      return {
        ...state,
        searchZip: payload
      };
    case SEARCH_CITY:
      return {
        ...state,
        cityResults: payload,
        searched: true
      };

    default:
      return state;
  }
}
