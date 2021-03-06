import React, { Component } from "react";
import "animate.css";
import "./App.css";
import MainPanel from "./components/Main/MainPanel";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import styled from "styled-components";

const NavbarStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  align-items: center;
  margin-bottom: 1rem;
`;

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavbarStyle className="nav">
          <Navbar />
        </NavbarStyle>
        <div className="row">
          <div className="col-3 animated slideInLeft faster">
            <Sidebar />
          </div>
          <div className="col-9">
            <MainPanel />
          </div>
        </div>
        <div className="footer">
          <p>
            Source code for this project can be found at{" "}
            <a href="https://github.com/emilMircea/dashboard">
              at this github repo
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
