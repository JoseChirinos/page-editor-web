import React, { Component } from 'react'
import './main.css'
/* Components */
import Menu from '../menu'
import TopNav from '../menu/top-nav'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  DrawerAppContent,
} from '@rmwc/drawer'

class Main extends Component {
  render() {
    const { signOut } = this.props;
    return (
      <div>
        <nav>
          <TopNav
            signOut={signOut}
          />
        </nav>
        <div className="main-panel">
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Drawer dismissible open={true} style={{ position: 'fixed' }}>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerSubtitle>Administrador</DrawerSubtitle>
              </DrawerHeader>
              <DrawerContent>
                <Menu />
              </DrawerContent>
            </Drawer>

            {/* Optional DrawerAppContent */}
            <DrawerAppContent>
              <section className="Main-container">
                {this.props.children}
              </section>
            </DrawerAppContent>
          </div>
        </div>
      </div>
    )
  }
}
export default Main;