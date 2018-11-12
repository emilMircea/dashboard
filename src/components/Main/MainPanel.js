import React from 'react'
import SalesGraph from './styles/MainChart/SalesChart'
import ShippingGraph from './ShippingGraph'
import CompletedTasks from './UnderperformingComponent'
import MonthlySales from './MonthlySales'

const MainPanel = () => (
	<div className="main-panel">
		<div className="row">
			<SalesGraph />
		</div>
		<div className="row">
			<MonthlySales />
			<CompletedTasks />
			<ShippingGraph />
		</div>

	</div>
)

export default MainPanel
