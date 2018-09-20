import React from 'react'
import GraphWrapper from './styles/GraphWrapper'
import GraphHeader from './styles/GraphHeader'
import { Line } from "react-chartjs-2"
import deliveryIcon from "../../assets/images/delivery-icon.svg"
import CustomIconComponent from './CustomIconComponent'
import styled from 'styled-components'



const data = (canvas) => {
	const ctx = canvas.getContext("2d")
	let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
	gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
	gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
	gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
	return { 
		labels: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"], 
		datasets: [{ 
			label: "Shipped per Quarter",
			 borderColor: "#f14bcb", 
			 pointBorderColor: "#FFF", 
			pointBackgroundColor: "#f14bcb", 
			 pointBorderWidth: 2, pointHoverRadius: 4, 
			 pointHoverBorderWidth: 1, pointRadius: 4, fill: true, 
			 backgroundColor: gradientStroke, borderWidth: 2, data: [542, 550, 380, 610] }] };
}

const GraphTitle = styled.h4`
	display: flex;
	justify-content: center;
	align-items: center;
`


const ShippingGraph = () => (
	<GraphWrapper className="col-4 card card-chart">
		<GraphHeader className="card-header">
		<span style={{color: '#9A9A9A'}} className='card-category'>Yearly Shipments</span>
			<h5 className="card-title graph-title">
				<CustomIconComponent icon={deliveryIcon} total={2082} />
			</h5>
		</GraphHeader>
		
		<Line width={350} height={290} data={data} />
	</GraphWrapper>
)

export default ShippingGraph
