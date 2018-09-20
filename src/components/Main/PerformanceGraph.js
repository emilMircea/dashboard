import React from 'react'
import GraphWrapper from './styles/GraphWrapper'
import GraphHeader from './styles/GraphHeader'
import GraphBody from './styles/GraphBody'

const PerformanceGraph = () => (
	<GraphWrapper className="col-12 card card-chart" style={{marginBottom: '2rem'}}>
		<GraphHeader className="card-header">
			<h9 style={{color: '#9A9A9A'}} className='card-category'>Sales</h9>
			<h5 className='card-title'>Yearly Performance Graph</h5>
		</GraphHeader>
		<GraphBody className="card-body">
			<p>body of cart</p>
		</GraphBody>
	</GraphWrapper>
)

export default PerformanceGraph
