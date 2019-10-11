import React, { useState, useEffect } from 'react'
import './NavBar-style.css'
import { Nav, NavWrapper, NavBrand, NavMenu, NavMobile } from '../style'
import { HamburgerElastic } from 'react-animated-burgers'

const mediaQuery = (event, setOpen) =>{
    if (event.matches) {
        // mobile screen
        setOpen(false)
      } else {
        // hd screen
        setOpen(true)
      }
}
const NavBar = ({
    scroller
})=>{
    const  match = window.matchMedia('(max-width: 960px)')
    const [open, setOpen] = useState(!match.matches)
    const toggleMenu = ()=>{
        setOpen(!open)
    }
    useEffect(()=>{
        match.addListener((e)=> mediaQuery(e, setOpen))
    },[match])
    return (
        <Nav
            className={`${scroller? 'navbar-down':'navbar-top'}`}
        >
            <NavWrapper>
                <NavBrand>
                    <img src="/assets/images/escudo_informatica.jpg" alt=""/>
                    <span>
                        Ingeniería Informatica
                    </span>
                </NavBrand>
                <NavMobile>
                    <HamburgerElastic
                        isActive={ open }
                        buttonWidth={ 30 }
                        barColor="#fff"
                        toggleButton={ toggleMenu }
                    />
                </NavMobile>
                {
                    open?
                    <NavMenu>
                        <ul>
                            <li>
                                Inicio
                            </li>
                            <li>
                                Acerca de
                            </li>
                            <li>
                                Contactanos
                            </li>
                            <li>
                                Registrate
                            </li>
                        </ul>
                    </NavMenu>
                    :
                    null
                }
            </NavWrapper>
        </Nav>
    )
}

export default NavBar