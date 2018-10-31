import React from "react";

const Sidebar = () => (
  <ul className="nav flex-column sidebar">
    <li className="nav-item">
      <a className="nav-link active">Sales Analysis</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Inventory</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Monthly Expenses</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Notifications</a>
    </li>
  </ul>
);

export default Sidebar;
