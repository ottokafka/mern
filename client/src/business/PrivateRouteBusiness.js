import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRouteBusiness = ({
  component: Component,
  authBusiness: { isAuthenticatedBusiness, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      token === undefined ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login_business" />
      )
    }
  />
);

PrivateRouteBusiness.propTypes = {
  authBusiness: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authBusiness: state.authBusiness
});

export default connect(mapStateToProps)(PrivateRouteBusiness);
