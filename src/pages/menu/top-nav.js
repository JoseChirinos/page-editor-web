import React, { Component } from 'react'
import './top-nav.css'
/* Components */
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar'

import {
  NavLink
} from 'react-router-dom'

import {
  SimpleMenu,
  MenuItem,
} from '@rmwc/menu'

class TopNav extends Component {
  constructor(props) {
    super()
    this.state = {
      open: false
    }
  }
  toggle = () => {
    this.setState((prev) => ({
      open: !prev.open
    })
    )
  }
  render() {
    const { signOut } = this.props
    return (
      <div className="TopNav">

        <TopAppBar fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon="menu" />
              <TopAppBarTitle>
                <aside className="TopNav-user">
                  Sistema de Emergencias
                  <small>Administrador</small>
                </aside>
              </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <SimpleMenu handle={<TopAppBarActionItem icon="person_pin" />}
                anchorCorner='topStart'
              >
                <MenuItem>
                  <NavLink to="/" className="TopNav-link" onClick={signOut}>
                    Perfil
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/" className="TopNav-link" onClick={signOut}>
                    Salir
                  </NavLink>
                </MenuItem>
              </SimpleMenu>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </div>
    )
  }
}

export default TopNav;