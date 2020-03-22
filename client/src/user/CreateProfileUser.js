import React, { useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../redux/actions/profileUser";

const CreateProfileUser = ({
  createProfile,
  getCurrentProfile,
  profileUser: { profileUser },
  history
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  });

  const { name, phoneNumber, email } = formData;

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
    <Fragment>
      <div className="container text-center">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <img className="mb-4" src={""} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Location Information</h1>

          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => onChange(e)}
          />

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

CreateProfileUser.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profileUser: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileUser: state.profileUser
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfileUser)
);
