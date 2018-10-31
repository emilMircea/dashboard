import React from "react";
import GraphWrapper from "./styles/GraphWrapper";
import GraphHeader from "./styles/GraphHeader";
import underperformingIcon from "../../assets/images/underperforming-logo.svg";
import CustomIconComponent from "./CustomIconComponent";
import { Bar } from "react-chartjs-2";
import underperfomingData from "../../data/underperformingData";

const UndeperformingComponent = () => (
  <GraphWrapper className="col-4 card card-chart">
    <GraphHeader className="card-header">
      <span className="card-category card-heading">
        Underperforming Products
      </span>
      <h5 className="card-title graph-title">
        <CustomIconComponent icon={underperformingIcon} total={7} />
      </h5>
    </GraphHeader>
    <Bar width={150} height={100} data={underperfomingData} />
  </GraphWrapper>
);

export default UndeperformingComponent;
