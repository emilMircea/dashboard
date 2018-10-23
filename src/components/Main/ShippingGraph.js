import React from "react";
import GraphWrapper from "./styles/GraphWrapper";
import GraphHeader from "./styles/GraphHeader";
import { Line } from "react-chartjs-2";
import deliveryIcon from "../../assets/images/delivery-icon.svg";
import CustomIconComponent from "./CustomIconComponent";
import shippingData from "../../data/shippingData";

const ShippingGraph = () => (
  <GraphWrapper className="col-4 card card-chart">
    <GraphHeader className="card-header">
      <span style={{ color: "#9A9A9A" }} className="card-category">
        Yearly Shipments
      </span>
      <h5 className="card-title graph-title">
        <CustomIconComponent icon={deliveryIcon} total={2082} />
      </h5>
    </GraphHeader>

    <Line width={150} height={100} data={shippingData} />
  </GraphWrapper>
);

export default ShippingGraph;
