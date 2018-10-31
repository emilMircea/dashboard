import React from "react";
import GraphWrapper from "./styles/GraphWrapper";
import GraphHeader from "./styles/GraphHeader";
import { Bar } from "react-chartjs-2";
import CustomIconComponent from "./CustomIconComponent";
import salesIcon from "../../assets/images/sales-logo.svg";
import monthlySalesData from "../../data/montlySalesData";

const MonthlySales = () => (
  <GraphWrapper className="col-4 card card-chart">
    <GraphHeader className="card-header">
      <span
        style={{ color: "#9A9A9A" }}
        className="card-category is-capitalized"
      >
        Sales this Month
      </span>
      <h5 className="card-title graph-title">
        <CustomIconComponent icon={salesIcon} total={189} />
      </h5>
    </GraphHeader>

    <Bar width={150} height={100} data={monthlySalesData} />
  </GraphWrapper>
);

export default MonthlySales;
