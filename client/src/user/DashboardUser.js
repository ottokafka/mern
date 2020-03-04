import React, { Fragment, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import fade1 from "../img/fade1.jpeg";

import { getCurrentProfile, deleteAccount } from "../redux/actions/profileUser";

const DashboardUser = ({
  getCurrentProfile,
  deleteAccount,
  authUser: { user, isAuthenticatedUser },
  profileUser: { profile, contact }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  let tokenUser = localStorage.getItem("tokenUser");
  if (!tokenUser || localStorage.tokenUser === "undefined") {
    return <Redirect to="/login_user" />;
  }

  if (profile === null) {
    return (
      <Fragment>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {/* single card below */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Contact Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <small className="text-muted"></small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Name: </li>
                  <li>Email:</li>
                  <li>Phone:</li>
                </ul>
                <Link
                  to="create_profile_user"
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  if (profile !== null) {
    return (
      <Fragment>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {/* single card below */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Search for Business</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <small className="text-muted"></small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <b>Search by Zip or City</b>
                  </li>
                  <li>
                    <p>Find a business now </p>
                  </li>
                </ul>
                <Link
                  to="search"
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  Search
                </Link>
              </div>
            </div>
            {/* single card below */}
            {/* single card below */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Payment Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <small className="text-muted"></small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <b>Card: </b>
                  </li>
                  <li>
                    <b>Apple Pay</b>:
                  </li>
                  <li>
                    <b>Android Pay:</b>
                  </li>
                </ul>
                <Link
                  to="add_payment"
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  Add Payment
                </Link>
              </div>
            </div>
            {/* single card below */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Contact Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <small className="text-muted"></small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <b>Name: </b>
                    {profile.contact.name}
                  </li>
                  <li>
                    <b>Email</b>: {profile.contact.email}
                  </li>
                  <li>
                    <b>Phone</b>: {profile.contact.phoneNumber}
                  </li>
                </ul>
                <Link
                  to="create_profile_user"
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  Edit contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

DashboardUser.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired,
  profileUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authUser: state.authUser,
  profileUser: state.profileUser
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DashboardUser
);
