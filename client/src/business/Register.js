import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../redux/actions/alert";
import { registerBusiness } from "../redux/actions/authBusiness";
import PropTypes from "prop-types";
import fade1 from "../img/fade1.jpeg";

const Register = ({ setAlert, registerBusiness, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    phoneNumber: ""
  });

  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    phoneNumber
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerBusiness({ firstName, lastName, email, password, phoneNumber });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/login_business" />;
  }

  return (
    <Fragment>
      <div className="text-center">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <img className="mb-4" src={fade1} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Create a Business</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="first name"
            name="firstName"
            value={firstName}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="last name"
            name="lastName"
            value={lastName}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="phone"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
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
            value="Register business"
          />

          <p className="mt-5 mb-3 text-muted">© 2020</p>
        </form>

        <p className="my-1">
          Already have an account? <Link to="/login_business">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerBusiness: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authBusiness.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, registerBusiness })(
  Register
);
