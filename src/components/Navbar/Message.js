import React from "react";
import styled from "styled-components";

const MessageLink = styled.a`
  font-size: 0.7rem;
`;

const Message = props => (
  <MessageLink className="nav-item dropdown-item message">
    {props.message}
  </MessageLink>
);

export default Message;
