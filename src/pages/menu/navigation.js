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
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink to='/' exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            <span>
              Ver la Página
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={match.url} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Panel
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/usuarios`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/posts`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navigation)