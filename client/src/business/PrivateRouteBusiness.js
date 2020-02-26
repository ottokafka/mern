import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRouteBusiness = ({
  component: Component,
  authBusiness: { isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
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
