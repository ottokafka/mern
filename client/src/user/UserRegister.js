import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../redux/actions/alert";
import { registerUser } from "../redux/actions/authActions";
import PropTypes from "prop-types";
import fade1 from "../img/fade1.jpeg";

const UserRegister = ({ setAlert, registerUser, isAuthenticatedUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  let tokenUser = localStorage.tokenUser;
  if (tokenUser === "undefined") {
    localStorage.removeItem("tokenUser");
  } else if (tokenUser) {
    return <Redirect to="/dashboard_user" />;
  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isAuthenticatedUser) {
    return <Redirect to="/dashboard_user" />;
  }

  return (
    <Fragment>
      <div className="text-center">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <img className="mb-4" src={fade1} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Create a Account</h1>

          <input
            className="form-control"
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="username"
            value={email}
            onChange={e => onChange(e)}
          />

          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="username"
            value={password}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            autoComplete="username"
            value={password2}
            onChange={e => onChange(e)}
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <input
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            value="Sign up"
          />

          <p className="mt-5 mb-3 text-muted">© 2020</p>
        </form>

        <p className="my-1">
          Already have an account? <Link to="/login_user">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

UserRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticatedUser: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticatedUser: state.authUser.isAuthenticatedUser
});

export default connect(mapStateToProps, { setAlert, registerUser })(
  UserRegister
);
