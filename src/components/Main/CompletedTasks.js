import React from 'react'
import GraphWrapper from './styles/GraphWrapper'
import GraphHeader from './styles/GraphHeader'
import GraphBody from './styles/GraphBody'

const CompletedTasks = () => (
	<GraphWrapper className="col-4 card card-chart">
		<GraphHeader className="card-header">
			<h9 style={{color: '#9A9A9A'}} className='card-category'>Tasks</h9>
		</GraphHeader>
		<GraphBody className="card-body">
			<p>body of Tasks</p>
		</GraphBody>
	</GraphWrapper>
)

export default CompletedTasks
