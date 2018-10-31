import React from "react";
import PropTypes from "prop-types";

const CustomIconComponent = props => {
  return (
    <div className="d-inline-flex">
      <span style={{ marginRight: "1rem" }}>
        <img
          alt={props.description}
          style={{ width: "25px" }}
          src={props.icon}
        />
      </span>
      <span style={{ marginTop: '2px'}}>{props.total}</span>
    </div>
  );
};

CustomIconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  total: PropTypes.number
};

export default CustomIconComponent;
