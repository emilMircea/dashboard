import React from 'react'
import PerformanceGraph from './PerformanceGraph'
import TotalShipping from './TotalShipping'
import CompletedTasks from './CompletedTasks'
import MonthlySales from './MonthlySales'

const MainPanel = () => (
	<div className="main-panel">
		<div className="row" style={{height: '50%'}}>
			<PerformanceGraph />
		</div>
		<div className="row" style={{height: '40%'}}>
			<TotalShipping />
			<MonthlySales />
			<CompletedTasks />
		</div>

	</div>
)

export default MainPanel
