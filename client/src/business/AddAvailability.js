import React, { Fragment, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAvailability } from "../redux/actions/profileBusiness";

const AddAvailability = ({ addAvailability, history }) => {
  const [formData, setFormData] = useState({
    day_of_week1: "Monday",
    work1: false,
    start_time1: "",
    end_time1: "",
    start_lunch1: "",
    end_lunch1: "",
    day_of_week2: "Tuesday",
    work2: false,
    start_time2: "",
    end_time2: "",
    start_lunch2: "",
    end_lunch2: "",
    day_of_week3: "Wednesday",
    work3: false,
    start_time3: "",
    end_time3: "",
    start_lunch3: "",
    end_lunch3: "",
    day_of_week4: "Thursday",
    work4: false,
    start_time4: "",
    end_time4: "",
    start_lunch4: "",
    end_lunch4: "",
    day_of_week5: "Friday",
    work5: false,
    start_time5: "",
    end_time5: "",
    start_lunch5: "",
    end_lunch5: "",
    day_of_week6: "Saturday",
    work6: false,
    start_time6: "",
    end_time6: "",
    start_lunch6: "",
    end_lunch6: "",
    day_of_week7: "Sunday",
    work7: false,
    start_time7: "",
    end_time7: "",
    start_lunch7: "",
    end_lunch7: ""
  });

  const [mondayInputs, toggleMonday] = useState(false);
  const [tuesdayInputs, toggleTuesday] = useState(false);
  const [wednesdayInputs, toggleWednesday] = useState(false);
  const [thursdayInputs, toggleThursday] = useState(false);
  const [fridayInputs, toggleFriday] = useState(false);
  const [saturdayInputs, toggleSaturday] = useState(false);
  const [sundayInputs, toggleSunday] = useState(false);

  let {
    // day_of_week1,
    work1,
    start_time1,
    end_time1,
    // start_lunch1,
    // end_lunch1,
    // day_of_week2,
    work2,
    start_time2,
    end_time2,
    // start_lunch2,
    // end_lunch2,
    // day_of_week3,
    work3,
    start_time3,
    end_time3,
    // start_lunch3,
    // end_lunch3,
    // day_of_week4,
    work4,
    start_time4,
    end_time4,
    // start_lunch4,
    // end_lunch4,
    // day_of_week5,
    work5,
    start_time5,
    end_time5,
    // start_lunch5,
    // end_lunch5,
    // day_of_week6,
    work6,
    start_time6,
    end_time6,
    // start_lunch6,
    // end_lunch6,
    // day_of_week7,
    work7,
    start_time7,
    end_time7
    // start_lunch7,
    // end_lunch7
  } = formData;

  // check if token is not in localStorage or undefined go to login page
  let token = localStorage.token;
  if (!token || token === "undefined") {
    return <Redirect to="login_business" />;
  }

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h6 className="large text-primary">Add your Availability</h6>

      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addAvailability(formData, history);
        }}
      >
        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Monday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work1"
                    checked={work1}
                    value={work1}
                    onClick={() => toggleMonday(!mondayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work1: !work1 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {mondayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time1"
                  value={start_time1}
                  onChange={e => onChange(e)}
                />

                {/* <div className=" col border-right border-dark">
                
                </div> */}
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time1"
                  value={end_time1}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}
        {/* end of Monday */}
        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Tuesday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work2"
                    checked={work2}
                    value={work2}
                    onClick={() => toggleTuesday(!tuesdayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work2: !work2 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {tuesdayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time2"
                  value={start_time2}
                  onChange={e => onChange(e)}
                />

                {/* <div className=" col border-right border-dark">
                
                </div> */}
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time2"
                  value={end_time2}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Wednesday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work3"
                    checked={work3}
                    value={work3}
                    onClick={() => toggleWednesday(!wednesdayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work3: !work3 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {wednesdayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time3"
                  value={start_time3}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time3"
                  value={end_time3}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Thursday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work4"
                    checked={work4}
                    value={work4}
                    onClick={() => toggleThursday(!thursdayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work4: !work4 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {thursdayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time4"
                  value={start_time4}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time4"
                  value={end_time4}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Friday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work5"
                    checked={work5}
                    value={work5}
                    onClick={() => toggleFriday(!fridayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work5: !work5 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {fridayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time5"
                  value={start_time5}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time5"
                  value={end_time5}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Saturday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work6"
                    checked={work6}
                    value={work6}
                    onClick={() => toggleSaturday(!saturdayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work6: !work6 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {saturdayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time6"
                  value={start_time6}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="row">
                {" "}
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time6"
                  value={end_time6}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <Fragment>
          <div className="container">
            <div className="row border-top border-bottom border-dark">
              <div className="col">
                <p className="m-4">
                  <small>Sunday</small>
                </p>
              </div>
              <div className="col">
                <label className=" rocker rocker-small">
                  <input
                    type="checkbox"
                    name="work7"
                    checked={work7}
                    value={work7}
                    onClick={() => toggleSunday(!sundayInputs)}
                    onChange={() => {
                      setFormData({ ...formData, work7: !work7 });
                    }}
                  />
                  <span className="switch-left">
                    <small>Yes</small>
                  </span>
                  <span className="switch-right">
                    <small>No</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Fragment>

        {sundayInputs && (
          <Fragment>
            <div className="container border-bottom border-dark">
              <div className="row ">
                <label className="col">hours</label>
                <input
                  className="timeSelector w-50"
                  type="time"
                  name="start_time7"
                  value={start_time7}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="row">
                <label className="col">to </label>
                <input
                  className=" timeSelector w-50"
                  type="time"
                  name="end_time7"
                  value={end_time7}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

// AddAvailability.propTypes = {
// addAvailability: PropTypes.func.isRequired
// };

export default connect(null, { addAvailability })(withRouter(AddAvailability));
