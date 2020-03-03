import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile
} from "../redux/actions/profileBusiness";

const CreateProfileBusiness = ({
  createProfile,
  getCurrentProfile,
  profileBusiness: { profileBusiness },
  history
}) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    twitter: "",
    tiktok: "",
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

  return (
    <Fragment className="container">
      <div className="container text-center">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <img className="mb-4" src={""} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Location Information</h1>

          <input
            className="form-control"
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="city"
            name="city"
            value={city}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="State"
            name="state"
            value={state}
            onChange={e => onChange(e)}
          />

          <input
            className="form-control"
            type="text"
            placeholder="zipcode"
            name="zip"
            value={zip}
            onChange={e => onChange(e)}
          />

          <div className="mt-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Social Media
            </button>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="tiktok URL"
                name="tiktok"
                value={tiktok}
                onChange={onChange}
              />

              <input
                type="text"
                placeholder="snapchat URL"
                name="snapchat"
                value={snapchat}
                onChange={onChange}
              />
            </Fragment>
          )}

          <input
            className="btn btn-lg btn-primary btn-block mt-5"
            type="submit"
            value="submit"
          />
        </form>
      </div>
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
