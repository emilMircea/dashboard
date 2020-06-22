import React from "react";
import SalesChart from "./styles/SalesChart";
import ShippingGraph from "./ShippingGraph";
import CompletedTasks from "./UnderperformingComponent";
import MonthlySales from "./MonthlySales";

const MainPanel = () => (
  <div className="main-panel">
    <div className="row">
      <SalesChart />
    </div>
    <div className="row">
      <MonthlySales />
      <CompletedTasks />
      <ShippingGraph />
    </div>
  </div>
);

export default MainPanel;
