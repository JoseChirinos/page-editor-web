import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './main.css'
/* Components */
import Navigation from '../Menu/navigation'
import TopNav from '../Menu/top-nav'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  DrawerAppContent,
} from '@rmwc/drawer'

const mediaQuery = {
  match: null,
  init: (fn) => {
    if (!mediaQuery.match) {
      mediaQuery.match = window.matchMedia('(max-width: 968px)')
      mediaQuery.match.addListener((e) => {
        fn(e.currentTarget.matches)
      })
    }
  },
  destroy: () => {
    mediaQuery.match = null
  },
  check: () => {
    return window.matchMedia('(max-width: 968px)').matches
  }
}
const Main = ({
  signOut,
  children
}) => {
  const [toggle, setToggle] = useState(!mediaQuery.check())
  const [movil, setMovil] = useState(mediaQuery.check())

  const handleToggle = (e) => {
    setToggle(!toggle)
  }

  useEffect(() => {
    mediaQuery.init(setMovil)
  }, [setMovil])

  useEffect(() => {
    return () => {
      mediaQuery.destroy()
    }
  }, [])

  return (
    <div>
      <nav>
        <TopNav
          signOut={signOut}
          handleToggle={handleToggle}
        />
      </nav>
      <div className="main-panel">
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <Drawer
            modal={movil}
            dismissible={!movil}
            open={toggle}
            onClose={() => setToggle(false)}
            style={{ position: 'fixed' }}
          >
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerSubtitle>Administrador</DrawerSubtitle>
            </DrawerHeader>
            <DrawerContent>
              <Navigation
                movil={movil}
                handleToggle={handleToggle}
              />
            </DrawerContent>
          </Drawer>

          {/* Optional DrawerAppContent */}
          <DrawerAppContent>
            <section className="Main-container">
              {children}
            </section>
          </DrawerAppContent>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  signOut: PropTypes.func,
  children: PropTypes.element.isRequired
}
export default Main;