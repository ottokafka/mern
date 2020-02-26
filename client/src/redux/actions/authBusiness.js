import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "../types";
import setAuthToken from "../token";

// Load User
export const loadBusiness = () => async dispatch => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  let token = localStorage.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  };

  try {
    const res = await axios.get("/api/login", config);
    console.log(res);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
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
    const res = await axios.post("/api/login/business", body, config);

    console.log(res.data);

    localStorage.setItem("token", res.data.token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadBusiness());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
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
    const res = await axios.post("/api/login/businessLogin", body, config);

    // show our results from the server
    console.log(res.data);

    localStorage.setItem("token", res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadBusiness());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
