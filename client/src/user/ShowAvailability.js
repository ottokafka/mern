import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBusinessById } from "../redux/actions/profileUser";

const ShowAvailability = ({
  getBusinessById,
  match,
  searchReducer: { searched, searchedId }
}) => {
  useEffect(() => {
    getBusinessById(match.params.id);
  }, [getBusinessById, match.params.id]);

  if (searched === null) {
    return <h1>NOthing</h1>;
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
                  <Link
                    to={`/show_availability/${searchedId.business}`}
                    className="btn btn-primary"
                  >
                    More Info
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

const mapStateToProps = state => ({
  searchReducer: state.searchReducer
});

export default connect(mapStateToProps, { getBusinessById })(
  withRouter(ShowAvailability)
);
