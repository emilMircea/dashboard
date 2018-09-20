import React from 'react';
import PropTypes from 'prop-types';

const CustomIconComponent = props => {
  return <div className="d-inline-flex">
      <span style={{ marginRight: "1rem" }}>
        <img style={{ width: "25px" }} src={props.icon} />
      </span>
      <span>
        {props.total}
      </span>
    </div>;
};

CustomIconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  total: PropTypes.number
};

export default CustomIconComponent;
