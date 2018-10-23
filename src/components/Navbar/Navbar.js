import React from "react";
import CollapseNavigation from "./CollapseNavigation";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
`;

const Navbar = () => (
  <Nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
    <p className="navbar-brand" style={{ color: "white" }}>
      ACME Logo
    </p>
    <li>
     <CollapseNavigation />
    </li>
  </Nav>
);

export default Navbar;
