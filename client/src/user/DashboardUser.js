import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fade1 from "../img/fade1.jpeg";

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
          <h4>Get Faded, get lined up</h4>
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
                    <div className="btn-group"></div>
                    <small className="text-muted">35 mins</small>
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
