import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBusinessById } from "../redux/actions/profileUser";

const ShowAvailability = ({
  getBusinessById,
  match,
  searchReducer: { searched, searchedId, loadingId, loading }
}) => {
  useEffect(() => {
    getBusinessById(match.params.id);
  }, [getBusinessById, match.params.id]);

  let tokenUser = localStorage.tokenUser;
  if (!tokenUser || tokenUser === "undefined") {
    return <Redirect to="/login_user" />;
  }

  if (loading === true || loadingId === null) {
    return <h1>Loading Please wait</h1>;
  } else {
    return (
      <Fragment>
        <div>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              {/* single card below */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    {searchedId.company}
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Address: {searchedId.location.address} </li>
                    <li>City: {searchedId.location.city}</li>
                    <li>State: {searchedId.location.state}</li>
                    <li>Zip: {searchedId.location.zip}</li>
                  </ul>
                  <small class="text-muted">2 miles</small>
                  <p>
                    <small className="text-muted">Availability</small>
                  </p>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      Monday: {searchedId.availability.start_time1} -{" "}
                      {searchedId.availability.end_time1}
                    </li>
                    <li>
                      Tuesday: {searchedId.availability.start_time2} -{" "}
                      {searchedId.availability.end_time2}
                    </li>
                    <li>
                      Wednesday: {searchedId.availability.start_time3} -{" "}
                      {searchedId.availability.end_time3}
                    </li>
                    <li>
                      Thursday: {searchedId.availability.start_time4} -{" "}
                      {searchedId.availability.end_time4}
                    </li>
                  </ul>
                  <Link to="/search" className="btn btn-primary">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

ShowAvailability.propTypes = {
  getBusinessById: PropTypes.func.isRequired
};

// on load and display error is something is undefined because api data has not yet been fetched. map it to mapState to props
const mapStateToProps = state => ({
  searchReducer: state.searchReducer,
  searchedId: state.searchedId
});

export default connect(mapStateToProps, {
  getBusinessById
})(withRouter(ShowAvailability));
