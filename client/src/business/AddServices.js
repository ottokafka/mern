import React, { Fragment, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addServices } from "../redux/actions/profileBusiness";

const AddServices = ({ addServices, history }) => {
  const [formData, setFormData] = useState({
    lineUp: "",
    fade: "",
    haircut: "",
    edgeUp: "",
    design: "",
    buzzCut: "",
    trim: "",
    neckTrim: "",
    beardTrim: "",
    hotTowel: "",
    mustacheTrim: "",
    razoring: "",
    shave: "",
    sideburnShave: "",
    extensionAddOn: "",
    braids: "",
    flatIron: "",
    updo: "",
    otherStyle: "",
    bangTrim: "",
    womenTrim: "",
    allOverColor: "",
    bleachAndTone: "",
    caramelisingColor: "",
    colorCorrection: "",
    doubleProcessColor: "",
    hairTint: "",
    partialColor: "",
    permanentColor: "",
    rootTouchUp: "",
    SemiPermanentColor: "",
    closureSewIn: "",
    fullSewIn: "",
    fullWeave: "",
    netting: "",
    partialSewIn: "",
    partialWeave: "",
    quickWeave: "",
    sewInMaintenance: ""
  });

  let {
    lineUp,
    fade
    // haircut,
    // edgeUp,
    // design,
    // buzzCut,
    // trim,
    // neckTrim,
    // beardTrim,
    // hotTowel,
    // mustacheTrim,
    // razoring,
    // shave,
    // sideburnShave,
    // extensionAddOn,
    // braids,
    // flatIron,
    // updo,
    // otherStyle,
    // bangTrim,
    // womenTrim,
    // allOverColor,
    // bleachAndTone,
    // caramelisingColor,
    // colorCorrection,
    // doubleProcessColor,
    // hairTint,
    // partialColor,
    // permanentColor,
    // rootTouchUp,
    // SemiPermanentColor,
    // closureSewIn,
    // fullSewIn,
    // fullWeave,
    // netting,
    // partialSewIn,
    // partialWeave,
    // quickWeave,
    // sewInMaintenance
  } = formData;

  // check if tokenBusiness is not in localStorage or undefined go to login page
  let tokenBusiness = localStorage.tokenBusiness;
  if (!tokenBusiness || tokenBusiness === "undefined") {
    return <Redirect to="login_business" />;
  }

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container text-center">
        <h6 className="large text-primary">Add your Services</h6>

        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            addServices(formData, history);
          }}
        >
          <label>Line up</label>
          <input
            className="w-25"
            type="number"
            placeholder="$10"
            name="lineUp"
            value={lineUp}
            onChange={e => onChange(e)}
          />

          <label>Fade</label>
          <input
            className="w-25"
            type="number"
            placeholder="$10"
            name="fade"
            value={fade}
            onChange={e => onChange(e)}
          />

          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard_business">
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

AddServices.propTypes = {
  addServices: PropTypes.func.isRequired
};

export default connect(null, { addServices })(withRouter(AddServices));
