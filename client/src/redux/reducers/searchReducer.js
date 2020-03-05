import { SEARCH_CITY, SEARCH_ZIP, SEARCH_BUSINESS_INFO_BY_ID } from "../types";

const initialState = {
  searched: null,
  cityResults: {},
  searchedId: {}
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
    case SEARCH_BUSINESS_INFO_BY_ID:
      return {
        ...state,
        searchedId: payload,
        searched: true
      };

    default:
      return state;
  }
}
