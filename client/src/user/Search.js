import React, { useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchCity } from "../redux/actions/profileUser";

const Search = ({
  searchCity,
  history,
  searchReducer: { searchReducer, searched, cityResults }
}) => {
  const [formData, setFormData] = useState({
    city: ""
  });

  const { city } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // searchZip(formData, history);
    searchCity(formData, history);
  };

  if (searched === null) {
    return (
      <Fragment>
        <div className="container text-center">
          <form className="form-signin" onSubmit={e => onSubmit(e)}>
            <img className="mb-4" src={""} alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">
              Search for a business
            </h1>

            <input
              className="form-control"
              type="text"
              placeholder="city"
              name="city"
              value={city}
              onChange={e => onChange(e)}
            />
            {/* <input
                className="form-control"
                type="text"
                placeholder="zip"
                name="zip"
                value={zip}
                onChange={e => onChange(e)}
              /> */}

            <input
              className="btn btn-lg btn-primary btn-block mt-5"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div>
          {cityResults.map(result => (
            <div>
              <p key={result._id} result={result}></p>
              <p>Address: {result.location.address}</p>
              <p>City: {result.location.city}</p>
              <p>Zip: {result.location.zip}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
};

Search.propTypes = {
  //   searchZip: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchReducer: state.searchReducer
});

export default connect(mapStateToProps, { searchCity })(withRouter(Search));
