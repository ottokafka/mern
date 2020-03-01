import React from "react";
// import Emoji from "./Emoji";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <Link className="nav-link " to="register_business">
              Setup my Business
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
