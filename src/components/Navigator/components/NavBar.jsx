import React, { useState, useEffect, useContext } from 'react'
import './NavBar-style.css'
import { Nav, NavWrapper, NavBrand, NavMenu, NavMobile } from '../style'
import { HamburgerElastic } from 'react-animated-burgers'
import {
    NavLink
} from 'react-router-dom'
/* Context */
import { UserContext } from '../../../context/user-context'

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
    scroller,
    signOut
})=>{
    const  match = window.matchMedia('(max-width: 960px)')
    const user = useContext(UserContext)
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
                    <img src="/website/assets/images/escudo_informatica.jpg" alt=""/>
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
                                <NavLink exact to="/" activeClassName="active-navbar">
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active-navbar">
                                    Acerca de
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/posts" activeClassName="active-navbar">
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                {
                                    Object.entries(user).length > 0 ?
                                        <NavLink to="/admin">
                                            { user.first_name }
                                        </NavLink>   
                                        :
                                        <NavLink to="/login">
                                            Iniciar Sesion
                                        </NavLink>
                                }
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