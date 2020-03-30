import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavContainer } from './style'
import Nav from './components/NavBar'

const handleScroll = (scroller, setScroller)=>{
    if(window.scrollY>200){
        if(!scroller){
            setScroller(true)
        }
    }else{
        if(scroller){
            setScroller(false)
        }
    }
}
const Navigator = ({
    signOut,
    color
})=>{
    const [scroller, setScroller] = useState(false)
    useEffect( ()=>{
        window.onscroll = () => handleScroll(scroller, setScroller)
    },[scroller])

    return (
        <NavContainer>
            <Nav
                scroller={ scroller }
                signOut={ signOut }
                color={ color }
            />
        </NavContainer>
    )
}

Navigator.propTypes = {
    signOut: PropTypes.func,
    color: PropTypes.string
}

Navigator.defaultProps = {
    signOut: ()=>{},
    color: 'transparent'
}

export default Navigator