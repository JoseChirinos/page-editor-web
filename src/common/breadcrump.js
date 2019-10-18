import React from 'react'
import './breadcrump.css'
import PropTypes from 'prop-types'
import {
  NavLink
} from 'react-router-dom'

/* Components */
import { Icon } from '@rmwc/icon'

/* 
 *  ---DATOS DE ENTRADA---
 *
 *  match: Object { path ... }
 * 
 */

const BreadCrump = (props) => {
  let match = String(props.match.url).split('/'),
    routes = [],
    routeNow = "",
    iconNow = ""
  let matchLimit = match.length - 1
  match.forEach((i, index) => {
    if (index === 0) {
      routeNow += i
      iconNow = 'home'
    } else {
      routeNow += "/" + i
      iconNow = 'keyboard_arrow_right'
    }
    routes.push({
      path: routeNow,
      title: i === "" ? "principal" : i,
      icon: iconNow
    })
  })
  return (
    <div className="BreadCrump">
      {
        routes.map((route, index) => (
          index !== matchLimit ?
            <NavLink to={route.path} key={`bc${index}`}>
              <Icon icon={route.icon} />
              {route.title}
            </NavLink> :
            <NavLink
              to={route.path}
              onClick={e => e.preventDefault()}
              key={`bc${index}`}
              className="BreadCrump-link-disabled"
            >
              <Icon icon={route.icon} />
              {route.title}
            </NavLink>
        ))
      }
    </div>
  )
}

BreadCrump.propTypes = {
  match: PropTypes.object
}
BreadCrump.defaultProps = {
  match: {}
}

export default BreadCrump