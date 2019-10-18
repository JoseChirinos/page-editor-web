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
            Emergencias
            </NavLink>
        </li>
        <li>
          <NavLink to="/enfermeras" activeClassName="active-menu" onClick={MenuEvent}>
            Enfermeras
            </NavLink>
        </li>
        <li>
          <NavLink to="/historial" activeClassName="active-menu" onClick={MenuEvent}>
            Historial
            </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Navigation