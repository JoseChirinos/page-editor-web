import React, { useContext } from 'react'
import {
  NavLink
} from 'react-router-dom'
import './navigation.css'
import {
  withRouter
} from 'react-router'
/* Context */
import { UserContext } from '../../context/user-context'

const Navigation = ({
  movil,
  handleToggle,
  match,
}) => {
  const { type_user } = useContext(UserContext)
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink to={match.url} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Panel
          </NavLink>
        </li>
        {
          type_user !== 'P' &&
          <li>
            <NavLink to={`${match.url}/usuarios`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
              Usuarios
            </NavLink>
          </li>
        }
        {
          type_user !== 'P' &&
          <li>
            <NavLink to={`${match.url}/editor`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
              Editor
            </NavLink>
          </li>
        }
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