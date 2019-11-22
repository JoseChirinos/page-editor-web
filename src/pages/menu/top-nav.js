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
  NavLink,
  withRouter,
} from 'react-router-dom'

import {
  SimpleMenu,
  MenuItem,
} from '@rmwc/menu'

import { IconButton } from '@rmwc/icon-button'
import { Fab } from '@rmwc/fab'

const TopNav = ({
  match,
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
                Informatica
                <small>Panel</small>
              </aside>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <NavLink exact={true} to='/' className="TopNav-link">
              <Fab icon="screen_share" label="Ver" />
            </NavLink>
            <SimpleMenu handle={<IconButton icon="person_pin" />}
              anchorCorner='topStart'
            >
              <MenuItem onClick={signOut}>
                <NavLink exact={true} to={`${match.url}/perfil`} className="TopNav-link" onClick={signOut}>
                  Perfil
                </NavLink>
              </MenuItem>
              <MenuItem>
                <div className="TopNav-link" onClick={signOut}>Salir</div>
              </MenuItem>
            </SimpleMenu>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  )
}
export default withRouter(TopNav)