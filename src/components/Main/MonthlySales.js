import React from "react";
import GraphWrapper from "./styles/GraphWrapper";
import GraphHeader from "./styles/GraphHeader";
import { Bar } from "react-chartjs-2";
import CustomIconComponent from "./CustomIconComponent";
import deliveryIcon from "../../assets/images/delivery-icon.svg";
import monthlySalesData from "../../data/montlySalesData";

const MonthlySales = () => (
  <GraphWrapper className="col-4 card card-chart">
    <GraphHeader className="card-header">
      <span style={{ color: "#9A9A9A" }} className="card-category">
        Monthly Sales
      </span>
      <h5 className="card-title graph-title">
        <CustomIconComponent icon={deliveryIcon} total={189} />
      </h5>
    </GraphHeader>

    <Bar width={150} height={100} data={monthlySalesData} />
  </GraphWrapper>
);

export default MonthlySales;
