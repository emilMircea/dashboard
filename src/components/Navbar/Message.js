import React from 'react'

const Message = props => (
	<li className="nav-link">
		<a href="#" className="nav-item dropdown-item" style={{fontSize: '0.7em'}}>
			{props.message}
		</a>
	</li>
)

export default Message
