import React, { useState, useEffect } from 'react'
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
const Navigator = (props)=>{
    const [scroller, setScroller] = useState(false)
    useEffect( ()=>{
        window.onscroll = () => handleScroll(scroller, setScroller)
    },[scroller])

    return (
        <NavContainer>
            <Nav
                scroller={ scroller }
            />
        </NavContainer>
    )
}

export default Navigator