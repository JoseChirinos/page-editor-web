import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import './navigation.css'
import {
  withRouter
} from 'react-router'

const Navigation = ({
  movil,
  handleToggle,
  match,
}) => {
  let MenuEvent = () => {
    return true
  }
  if (movil) {
    MenuEvent = handleToggle
  }
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink to='/' exact={true} activeClassName="active-menu" onClick={MenuEvent}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={match.url} exact={true} activeClassName="active-menu" onClick={MenuEvent}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/usuarios`} exact={true} activeClassName="active-menu" onClick={MenuEvent}>
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/crop`} activeClassName="active-menu" onClick={MenuEvent}>
            Crop Test
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navigation)