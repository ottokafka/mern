import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_BUSINESS_SUCCESS,
  REGISTER_BUSINESS_FAIL,
  BUSINESS_LOADED,
  AUTH_ERROR_BUSINESS,
  LOGIN_BUSINESS_SUCCESS,
  LOGIN_BUSINESS_FAIL,
  LOGOUT_BUSINESS,
  CLEAR_PROFILE_BUSINESS
} from "../types";

// Load User
export const loadBusiness = () => async dispatch => {
  let tokenBusiness = localStorage.tokenBusiness;
  const config = {
    headers: {
      "Content-Type": "application/json",
      tokenBusiness: tokenBusiness
    }
  };

  try {
    const res = await axios.get("/api/loginBusiness", config);
    console.log(res);

    dispatch({
      type: BUSINESS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR_BUSINESS
    });
  }
};

// Register Business
export const register = (name, email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(name, email, password);

  try {
    const res = await axios.post("/api/registerBusiness", body, config);

    console.log(res.data);

    localStorage.setItem("tokenBusiness", res.data.tokenBusiness);

    dispatch({
      type: REGISTER_BUSINESS_SUCCESS,
      payload: res.data
    });

    dispatch(loadBusiness());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_BUSINESS_FAIL
    });
  }
};

// Login Business
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(email, password);

  try {
    // axios post our email and pass. TO check response use res.data
    const res = await axios.post("/api/loginBusiness", body, config);

    // show our results from the server
    console.log(res.data);

    localStorage.setItem("tokenBusiness", res.data.tokenBusiness);

    dispatch({
      type: LOGIN_BUSINESS_SUCCESS,
      payload: res.data
    });

    dispatch(loadBusiness());
  } catch (err) {
    console.log(err);

    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: LOGIN_BUSINESS_FAIL
    });
  }
};

// Logout / Clear Profile
export const logoutBusiness = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE_BUSINESS });
  dispatch({ type: LOGOUT_BUSINESS });
};
