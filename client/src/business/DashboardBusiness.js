import React, { Fragment, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getCurrentProfile,
  deleteAccount
} from "../redux/actions/profileBusiness";

const DashboardBusiness = ({
  getCurrentProfile,
  deleteAccount,
  profileBusiness: { profileBusiness, availability, services },
  authBusiness: { business }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  let tokenBusiness = localStorage.tokenBusiness;
  if (!tokenBusiness || tokenBusiness === "undefined") {
    return <Redirect to="login_business" />;
  }

  try {
    if (profileBusiness === null) {
      return (
        <Fragment>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Create Business Info
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    location <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Address: </li>
                    <li>City:</li>
                    <li>State:</li>
                    <li>Zip:</li>
                  </ul>
                  <Link
                    to="create_profile_business"
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
    } else if (availability === null) {
      return (
        <Fragment>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Whats your availability?
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    Availability <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Monday: {}</li>
                    <li>Tuesday: {}</li>
                    <li>Wednesday: {}</li>
                    <li>Thursday: {}</li>
                    <li>Friday: {}</li>
                    <li>Saturday: {}</li>
                    <li>Sunday: {}</li>
                  </ul>
                  <Link
                    to="add_availability"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Add Availability
                  </Link>
                </div>
              </div>
              {/* // single card end  */}
            </div>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Business Info</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    location <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Address:
                      {profileBusiness.location.address}
                    </li>
                    <li>City: {profileBusiness.location.city}</li>
                    <li>State: {profileBusiness.location.state}</li>
                    <li>Zip: {profileBusiness.location.zip}</li>
                  </ul>
                  <Link
                    to="create_profile_business"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (services === null) {
      return (
        <Fragment>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Your Services</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    {/* <li>Lineup: ${profileBusiness.services.lineUp}</li>
                  <li>fade: ${profileBusiness.services.fade}</li> */}
                  </ul>
                  <Link
                    to="add_services"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Add Services
                  </Link>
                </div>
              </div>
              {/* // single card end  */}
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Business Hours</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>

                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      <span>Monday : </span>
                      {profileBusiness.availability.start_time1}
                      {" - "}
                      {profileBusiness.availability.end_time1}
                    </li>
                    <li>
                      Tuesday: {profileBusiness.availability.start_time2}
                      {" - "}
                      {profileBusiness.availability.end_time2}
                    </li>
                    <li>
                      Wednesday: {profileBusiness.availability.start_time3}
                      {" - "}
                      {profileBusiness.availability.end_time3}
                    </li>
                    <li>
                      Thursday: {profileBusiness.availability.start_time4}
                      {" - "}
                      {profileBusiness.availability.end_time4}
                    </li>
                    <li>
                      Friday: {profileBusiness.availability.start_time5}
                      {" - "}
                      {profileBusiness.availability.end_time5}
                    </li>
                    <li>
                      Saturday: {profileBusiness.availability.start_time6}
                      {" - "}
                      {profileBusiness.availability.end_time6}
                    </li>
                    <li>
                      Sunday: {profileBusiness.availability.start_time7}
                      {" - "}
                      {profileBusiness.availability.end_time7}
                    </li>
                  </ul>
                  <Link
                    to="add_availability"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Edit Availability
                  </Link>
                </div>
              </div>
              {/* // single card end  */}

              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Location</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Address:
                      {profileBusiness.location.address}
                    </li>
                    <li>City: {profileBusiness.location.city}</li>
                    <li>State: {profileBusiness.location.state}</li>
                    <li>Zip: {profileBusiness.location.zip}</li>
                  </ul>
                  <Link
                    to="create_profile_business"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Your Services</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Lineup: ${profileBusiness.services.lineUp}</li>
                    <li>fade: ${profileBusiness.services.fade}</li>
                  </ul>
                  <Link
                    to="add_services"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Add Services
                  </Link>
                </div>
              </div>
              {/* // single card end  */}
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Business Hours</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>

                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      <span>Monday : </span>
                      {profileBusiness.availability.start_time1}
                      {" - "}
                      {profileBusiness.availability.end_time1}
                    </li>
                    <li>
                      Tuesday: {profileBusiness.availability.start_time2}
                      {" - "}
                      {profileBusiness.availability.end_time2}
                    </li>
                    <li>
                      Wednesday: {profileBusiness.availability.start_time3}
                      {" - "}
                      {profileBusiness.availability.end_time3}
                    </li>
                    <li>
                      Thursday: {profileBusiness.availability.start_time4}
                      {" - "}
                      {profileBusiness.availability.end_time4}
                    </li>
                    <li>
                      Friday: {profileBusiness.availability.start_time5}
                      {" - "}
                      {profileBusiness.availability.end_time5}
                    </li>
                    <li>
                      Saturday: {profileBusiness.availability.start_time6}
                      {" - "}
                      {profileBusiness.availability.end_time6}
                    </li>
                    <li>
                      Sunday: {profileBusiness.availability.start_time7}
                      {" - "}
                      {profileBusiness.availability.end_time7}
                    </li>
                  </ul>
                  <Link
                    to="add_availability"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Edit Availability
                  </Link>
                </div>
              </div>
              {/* // single card end  */}

              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Location</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Address:
                      {profileBusiness.location.address}
                    </li>
                    <li>City: {profileBusiness.location.city}</li>
                    <li>State: {profileBusiness.location.state}</li>
                    <li>Zip: {profileBusiness.location.zip}</li>
                  </ul>
                  <Link
                    to="create_profile_business"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  } catch (err) {
    return <h1>Reload the page</h1>;
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
