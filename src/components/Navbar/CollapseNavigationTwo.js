import React, { PureComponent } from 'react'
// import Notification from './Notification'
import Message from './Message'
import { Collapse } from 'react-collapse'
import { IconContext } from 'react-icons'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoIosSquareOutline } from 'react-icons/io'
import styled from 'styled-components'


const MessagesLength = styled.p`
	border-radius: 32px;
	background: #fd5d93;
	padding: .1rem .4rem;
	font-size: .7rem;
	font-weight: 500;
	color: #ebff00;
`

const messages = [
	{
		content: 'You have 3 returned items'
	},
	{
		content: 'Prices of several items have changed'
	},
	{
		content: 'You have 4 customer emails'
	},
	{
		content: 'The monthly expenses have been computed! See them here 👌'
	}
]

class CollapseNavigationTwo extends PureComponent {
	state = {
		isOpened: false
	}

	handleOpenMessageList = () => {
		this.setState({
			isOpened: !this.state.isOpened
		})
	}

	render() {
		return (
			<div>
				<a onClick={this.handleOpenMessageList} style={{ display: 'flex' }}>
					<IconContext.Provider value={{ className: 'icon-large' }}>
						<IoMdNotificationsOutline />
					</IconContext.Provider>
					<MessagesLength>{messages.length}</MessagesLength>
					<Collapse isOpened={this.state.isOpened}>
						<ul
							className={`dropdown-menu dropdown-menu-right dropdown-navbar ${
								this.state.isOpened ? 'show' : null
							}`}
						>
							{messages.map((message, index) => (
								<Message key={index} message={message.content} />
							))}
						</ul>
					</Collapse>
				</a>
			</div>
		)
	}
}

export default CollapseNavigationTwo
