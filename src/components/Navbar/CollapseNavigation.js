import React, { PureComponent } from "react";
import Message from "./Message";
import { Collapse } from "react-collapse";
import { IconContext } from "react-icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import styled from "styled-components";
import messages from "../../data/messajes";

const MessagesLength = styled.p`
  border-radius: 32px;
  background: #fd5d93;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: #ebff00;
`;

class CollapseNavigation extends PureComponent {
  state = {
    isOpened: false
  };

  handleOpenMessageList = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    return (
      <div onClick={this.handleOpenMessageList} className='notifications-wrapper'>
        <IconContext.Provider value={{ className: "icon-large" }}>
          <IoMdNotificationsOutline />
        </IconContext.Provider>
        <MessagesLength>{messages.length}</MessagesLength>
        <Collapse isOpened={this.state.isOpened}>
          <ul
            className={`dropdown-menu dropdown-menu-right dropdown-navbar ${
              this.state.isOpened ? "show" : null
            }`}
          >
            {messages.map((message, index) => (
              <li key={index}>
                <Message message={message.content} />
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default CollapseNavigation;
