import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fade1 from "../img/fade1.jpeg";
import fade2 from "../img/fade2.jpeg";
import fade3 from "../img/fade3.jpeg";
import fade4 from "../img/fade4.jpeg";
import fade5 from "../img/fade5.jpeg";
import fade6 from "../img/fade6.jpeg";
import fade7 from "../img/fade7.jpeg";
import fade8 from "../img/fade8.jpeg";
import fade9 from "../img/fade9.jpeg";

import { getCurrentProfile, deleteAccount } from "../redux/actions/profileUser";

const DashboardUser = ({
  getCurrentProfile,
  deleteAccount,
  authUser: { user },
  profileUser: { profileUser, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade1}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button> */}
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">35 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade2}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade3}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade4}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade5}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade6}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade8}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade7}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={fade9}
                  alt="Thumbnail [100%x225]"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">fades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button> */}
                    </div>
                    <small className="text-muted">30 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
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
