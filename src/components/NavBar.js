import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar

