import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAvailability } from "../redux/actions/profileBusiness";

const AddAvailability = ({ addAvailability, history }) => {
  const [formData, setFormData] = useState({
    day_of_week1: "",
    work1: false,
    start_time1: "",
    end_time1: "",
    start_lunch1: "",
    end_lunch1: "",
    day_of_week2: "",
    work2: false,
    start_time2: "",
    end_time2: "",
    start_lunch2: "",
    end_lunch2: "",
    day_of_week3: "",
    work3: false,
    start_time3: "",
    end_time3: "",
    start_lunch3: "",
    end_lunch3: "",
    day_of_week4: "",
    work4: false,
    start_time4: "",
    end_time4: "",
    start_lunch4: "",
    end_lunch4: "",
    day_of_week5: "",
    work5: false,
    start_time5: "",
    end_time5: "",
    start_lunch5: "",
    end_lunch5: "",
    day_of_week6: "",
    work6: false,
    start_time6: "",
    end_time6: "",
    start_lunch6: "",
    end_lunch6: "",
    day_of_week7: "",
    work7: false,
    start_time7: "",
    end_time7: "",
    start_lunch7: "",
    end_lunch7: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    day_of_week1,
    work1,
    start_time1,
    end_time1,
    start_lunch1,
    end_lunch1,
    day_of_week2,
    work2,
    start_time2,
    end_time2,
    start_lunch2,
    end_lunch2,
    day_of_week3,
    work3,
    start_time3,
    end_time3,
    start_lunch3,
    end_lunch3,
    day_of_week4,
    work4,
    start_time4,
    end_time4,
    start_lunch4,
    end_lunch4,
    day_of_week5,
    work5,
    start_time5,
    end_time5,
    start_lunch5,
    end_lunch5,
    day_of_week6,
    work6,
    start_time6,
    end_time6,
    start_lunch6,
    end_lunch6,
    day_of_week7,
    work7,
    start_time7,
    end_time7,
    start_lunch7,
    end_lunch7
  } = formData;

  //   console.log(work1);
  console.log(work2);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add your Availability</h1>

      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addAvailability(formData, history);
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col">Monday</div>
            <div class="col">One of</div>
          </div>
        </div>

        <div className="col custom-control custom-switch form-group">
          <input
            className="custom-control-input"
            id="customSwitch1"
            type="checkbox"
            name="work1"
            checked={work1}
            value={work1}
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            onChange={() => {
              setFormData({ ...formData, work1: !work1 });
              toggleDisabled(!toDateDisabled);
            }}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Monday
          </label>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <hr></hr>
            <div class="container">
              <div class="row">
                <div className="col form-group">
                  <label>Hours</label>
                  <input
                    className="w-50"
                    type="text"
                    placeholder="10:00am"
                    name="twitter"
                    value=""
                    onChange={onChange}
                  />
                </div>

                <div className="col">
                  <label>to</label>
                  <input
                    className="w-50"
                    type="text"
                    placeholder="6:00pm"
                    name="twitter"
                    value=""
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <hr></hr>
          </Fragment>
        )}

        <div className="form-group">
          <input
            type="text"
            placeholder="monday"
            name="day_of_the_week1"
            value={"Monday"}
            onChange={e => onChange(e)}
          />
        </div>
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={e => onChange(e)}
          />
        </div> */}
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddAvailability.propTypes = {
  addAvailability: PropTypes.func.isRequired
};

export default connect(null, { addAvailability })(withRouter(AddAvailability));
