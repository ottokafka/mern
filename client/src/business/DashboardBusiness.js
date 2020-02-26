import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Spinner from "../layout/Spinner";
// import DashboardActions from "./DashboardActions";
// import Experience from "./Experience";
// import Education from "./Education";
import {
  getCurrentProfile,
  deleteAccount
} from "../redux/actions/profileBusiness";

const DashboardBusiness = ({
  getCurrentProfile,
  deleteAccount,
  profileBusiness: { profileBusiness },
  authBusiness: { business }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (profileBusiness === null) {
    return (
      <Fragment>
        <h5> You dont have a profile so Create a profile</h5>
        <button>Create now</button>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {business && business.firstName}
        </p>
        <p>
          your info <strong>{business && business.email}</strong>
        </p>
        <p>
          {" "}
          Phone <strong>{business && business.phoneNumber}</strong>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>Show profile</h1>
        <div>{business && business.firstName}</div>
      </Fragment>
    );
  }
};

DashboardBusiness.propTypes = {
  authBusiness: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authBusiness: state.authBusiness,
  profileBusiness: state.profileBusiness
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DashboardBusiness
);
