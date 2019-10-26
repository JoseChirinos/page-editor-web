import React from 'react'
import './top-nav.css'
/* Components */
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
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

import { IconButton } from '@rmwc/icon-button'

const TopNav = ({
  signOut,
  handleToggle
}) => {
  return (
    <div className="TopNav">

      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <IconButton
              icon="menu"
              theme={['primaryBg', 'onPrimary']}
              onClick={handleToggle}
              style={{ ouline: 'none' }}
            />
            <TopAppBarTitle>
              <aside className="TopNav-user">
                Pagina de Informatica
                <small>Administrador</small>
              </aside>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <SimpleMenu handle={<IconButton icon="person_pin" />}
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
export default TopNav;