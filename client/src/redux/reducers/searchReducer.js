import {
  SEARCH_CITY,
  SEARCH_ZIP,
  SEARCH_BUSINESS_INFO_BY_ID,
  START_LOADING,
  FINISH_LOADING
} from "../types";

const initialState = {
  searched: null,
  // cityResults: {},
  // searchedId: {},
  loadingId: null,
  loading: true
};

// build a timeout logic that automatically give loading the value of true after 2 seconds
// create a action called load page that goes to null to true

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false
      };
    case SEARCH_ZIP:
      return {
        ...state,
        searchZip: payload,
        loading: false
      };
    case SEARCH_CITY:
      return {
        ...state,
        cityResults: payload,
        searched: true,
        loading: false
      };
    case SEARCH_BUSINESS_INFO_BY_ID:
      return {
        ...state,
        searchedId: payload,
        searched: true,
        loadingId: true,
        loading: false
      };

    default:
      return state;
  }
}
