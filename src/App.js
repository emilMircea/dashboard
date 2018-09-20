import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MainPanel from './components/Main/MainPanel'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/SideBar/Sidebar'
import styled from 'styled-components'

const NavbarStyle = styled.ul`
	display: flex;
	justify-content: space-between;
	padding-left: 2rem;
	align-items: center;
	margin-bottom: 1rem;
`

class App extends Component {
	render() {
		return <div className="container-fluid">
        <NavbarStyle className="nav">
          <li className="nav-item">
            <a className="navbar-brand" style={{ color: "white" }}>
              Logo
            </a>
          </li>
          <Navbar />
        </NavbarStyle>

        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <MainPanel />
          </div>
        </div>
        <div className='footer'>
          <p>footer info</p>
        </div>
      </div>;
	}
}

export default App
