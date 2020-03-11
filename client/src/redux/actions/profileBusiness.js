import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE_BUSINESS,
  PROFILE_ERROR_BUSINESS,
  UPDATE_PROFILE_BUSINESS,
  CLEAR_PROFILE_BUSINESS,
  ACCOUNT_DELETED_BUSINESS,
  AVAILABILITY,
  SERVICES
} from "../types";

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  const tokenBusiness = localStorage.tokenBusiness;
  //   console.log(tokenBusiness);

  const config = {
    headers: {
      "Content-Type": "application/json",
      tokenBusiness: tokenBusiness
    }
  };
  try {
    const res = await axios.get("/api/businessinfo/me", config);
    // console.log("This is causing the app to have an error");
    // const res2 = await axios.get("/api/availability/me", config);

    console.log(res.data);

    console.log(res.data.availability);

    dispatch({
      type: GET_PROFILE_BUSINESS,
      payload: res.data
    });

    // check if availability is there
    if (res.data.availability) {
      console.log("availability is ready");
      dispatch({
        type: AVAILABILITY
      });
    }
    // check if services is there
    if (res.data.services) {
      console.log("service is ready");
      dispatch({
        type: SERVICES
      });
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: err
    });
  }
  //   payload: { msg: err.response.statusText, status: err.response.status }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE_BUSINESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const tokenBusiness = localStorage.tokenBusiness;
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenBusiness: tokenBusiness
      }
    };

    const res = await axios.post("/api/businessinfo", formData, config);

    dispatch({
      type: GET_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard_business");
    }
  } catch (err) {
    console.log(err);

    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: err
    });
  }
};

// Add Availability
export const addAvailability = (formData, history) => async dispatch => {
  try {
    const tokenBusiness = localStorage.tokenBusiness;
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenBusiness: tokenBusiness
      }
    };

    const res = await axios.put("/api/availability", formData, config);
    console.log(res.data);

    dispatch({
      type: UPDATE_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch({
      type: AVAILABILITY
    });

    dispatch(setAlert("Availability Added", "success"));

    history.push("/dashboard_business");
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: err
    });
  }
};

// Add Services
export const addServices = (formData, history) => async dispatch => {
  try {
    const tokenBusiness = localStorage.tokenBusiness;
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenBusiness: tokenBusiness
      }
    };

    const res = await axios.put("/api/services", formData, config);
    console.log(res.data);

    dispatch({
      type: UPDATE_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch({
      type: SERVICES
    });

    dispatch(setAlert("Services Added", "success"));

    history.push("/dashboard_business");
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: err
    });
  }
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put("/api/profile/education", formData, config);

    dispatch({
      type: UPDATE_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch(setAlert("Education Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch(setAlert("Experience Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE_BUSINESS,
      payload: res.data
    });

    dispatch(setAlert("Education Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR_BUSINESS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE_BUSINESS });
      dispatch({ type: ACCOUNT_DELETED_BUSINESS });

      dispatch(setAlert("Your account has been permanantly deleted"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR_BUSINESS,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
