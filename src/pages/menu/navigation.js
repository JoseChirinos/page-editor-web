import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import './navigation.css'

const Navigation = (props) => {
  let MenuEvent = () => {
    return true
  }
  if (props.movil) {
    MenuEvent = props.handleToggle
  }
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink to="/" exact={true} activeClassName="active-menu" onClick={MenuEvent}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/usuarios" exact={true} activeClassName="active-menu" onClick={MenuEvent}>
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to="/crop" activeClassName="active-menu" onClick={MenuEvent}>
            Crop Test
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation