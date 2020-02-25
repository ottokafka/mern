import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser } from "../redux/actions/authActions";
import fade1 from "../img/fade1.jpeg";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    loginUser({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/user_dashboard" />;
  }

  return (
    <Fragment>
      <div className="text-center">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <img className="mb-4" src={fade1} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">
            Sign in to your account
          </h1>

          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />

          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
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
            value="Login business"
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
