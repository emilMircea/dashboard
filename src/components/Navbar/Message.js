import React from "react";

const Message = props => (
  <a className="nav-item dropdown-item" style={{ fontSize: "0.7em" }}>
    {props.message}
  </a>
);

export default Message;
