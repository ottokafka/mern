import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile
} from "../redux/actions/profileBusiness";

const CreateProfileBusiness = ({
  createProfile,
  getCurrentProfile,
  profileBusiness: { profileBusiness, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    company: "",
    twitter: "",
    tiktok: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    snapchat: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    address,
    city,
    state,
    zip,
    company,
    tiktok,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    snapchat
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profileBusiness === null ? (
    // <Redirect to="/dashboard" />
    <p></p>
  ) : (
    <Fragment>
      <h1 className="large text-primary">Create Your Business</h1>
      <p className="lead">
        <i className="fas fa-user" /> Let's get some information to make your
        Business stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onChange}
          />
          <small className="form-text">The address of your business.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="city"
            name="city"
            value={city}
            onChange={onChange}
          />
          <small className="form-text">The city of your business.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="state"
            name="state"
            value={state}
            onChange={onChange}
          />
          <small className="form-text">The state of your business.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="zipcode"
            name="zip"
            value={zip}
            onChange={onChange}
          />
          <small className="form-text">The zip code of your business.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">Name of your company</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-tiktok fa-2x" />
              <input
                type="text"
                placeholder="tiktok URL"
                name="tiktok"
                value={tiktok}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-snapchat fa-2x" />
              <input
                type="text"
                placeholder="snapchat URL"
                name="snapchat"
                value={snapchat}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard_business">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfileBusiness.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profileBusiness: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileBusiness: state.profileBusiness
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfileBusiness)
);
