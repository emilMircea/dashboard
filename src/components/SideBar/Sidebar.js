import React from 'react'
import styled from 'styled-components'

const SideBarWrapper = styled.ul`
	background: linear-gradient(to bottom, #e14eca 0%, #ba54f5 100%);
	height: 90%;
	border-radius: 0.4rem;
`

const Sidebar = () => (
	<SideBarWrapper className="nav flex-column">
		<li className="nav-item">
			<a href="#" className="nav-link active">Some Link</a>
		</li>
		<li className="nav-item">
			<a href="#" className="nav-link">Some Link</a>
		</li>
		<li className="nav-item">
			<a href="#" className="nav-link">Some Link</a>
		</li>
		<li className="nav-item">
			<a href="#" className="nav-link">Some Link</a>
		</li>

	</SideBarWrapper>
)

export default Sidebar
