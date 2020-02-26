import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../redux/actions/profileBusiness";

const Availability = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <h1>Availability</h1>
        {exp.to === null ? " Now" : <h1>Availability</h1>}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Availability Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Availability.propTypes = {
  //   experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Availability);
