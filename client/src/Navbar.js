import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutBusiness } from "./redux/actions/authBusiness";
import { logoutUser } from "./redux/actions/authActions";

const Navbar = ({
  authBusiness: { isAuthenticatedBusiness },
  logoutBusiness,
  authUser: { isAuthenticatedUser },
  logoutUser
}) => {
  const authLinksBusiness = (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <h4 className="navbar-brand">My Startup</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard_business">
                <span className="hide-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <a className="nav-link" onClick={logoutBusiness} href="#!">
                <span className="hide-sm">Logout Business</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );

  const authLinksUser = (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <h4 className="navbar-brand">My Startup</h4>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard_user">
              <span className="hide-sm">Dashboard User</span>
            </Link>
          </li>
          <li>
            <a className="nav-link" onClick={logoutUser} href="#!">
              <span className="hide-sm">Logout User</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <h4 className="navbar-brand">My Startup</h4>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register_user">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login_user">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register_business">
              Setup my Business
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  if (isAuthenticatedUser === false && isAuthenticatedBusiness === false) {
    return <Fragment>{guestLinks}</Fragment>;
  } else if (isAuthenticatedBusiness === true) {
    return <Fragment>{authLinksBusiness}</Fragment>;
  } else if (isAuthenticatedUser === true) {
    return <Fragment>{authLinksUser}</Fragment>;
  }
};

Navbar.propTypes = {
  logoutBusiness: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired,
  authBusiness: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authUser: state.authUser,
  authBusiness: state.authBusiness
});

export default connect(mapStateToProps, { logoutUser, logoutBusiness })(Navbar);
