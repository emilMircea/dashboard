import React from "react";
import CollapseNavigation from "./CollapseNavigation";
import styled from "styled-components";
import Logo from "../../assets/images/logo-analytics.svg";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-top: 1rem;
`;

const Navbar = () => (
  <Nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
    <img
      alt="logo"
      src={Logo}
      style={{ width: "40px", height: "40px", marginLeft: "4.5rem" }}
    />
    <li>
      <CollapseNavigation />
    </li>
  </Nav>
);

export default Navbar;
