import axios from "axios";
import setAuthToken from "../token";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_BUSINESS } from "../types";

// Register business
export const registerBusiness = (userData, history) => dispatch => {
  axios
    .post("/api/login/business", userData)
    .then(res => history.push("/login_business"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginBusiness = userData => dispatch => {
  axios
    .post("/api/login/businessLogin", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(loadBusiness(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const loadBusiness = decoded => {
  return {
    type: SET_CURRENT_BUSINESS,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(loadBusiness({}));
};

// import axios from "axios";
// import { setAlert } from "./alert";
// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
//   CLEAR_PROFILE
// } from "../types";
// import setAuthToken from "../token";

// // Register Business
// export const registerBusiness = ({
//   name,
//   email,
//   password
// }) => async dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   const body = JSON.stringify({ name, email, password });

//   try {
//     const res = await axios.post("/api/login/business", body, config);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

// // Login User
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post("/api/login/businessLogin", body, config);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });

//     dispatch(loadBusiness());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };

// // Set logged in user
// export const loadBusiness = () => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get("/api/login");
//     console.log(res.data);

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

// // Logout / Clear Profile
// export const logout = () => dispatch => {
//   dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };
