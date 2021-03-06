import React from "react";
import GraphWrapper from "./GraphWrapper";
import GraphHeader from "./GraphHeader";
import { Line } from "react-chartjs-2";
import data from "../../../data/salesData";
import styled from "styled-components";

const Subheading = styled.span`
  color: gray;
  font-size: 0.8rem;
  letter-spacing: 2px;
`;

const SalesChart = () => (
  <GraphWrapper className="col-12 card card-chart">
    <GraphHeader className="card-header">
      <Subheading className="card-category">On a per month basis</Subheading>
      <h4 className="card-title graph-title">ACME Sales</h4>
    </GraphHeader>

    <Line data={data} height={60} />
  </GraphWrapper>
);

export default SalesChart;
