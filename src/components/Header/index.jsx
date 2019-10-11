import React, { useEffect, useState } from 'react'
import { HeaderWrapper, HeaderImage } from './style'
import Typist from 'react-typist'
import { ParallaxBanner } from 'react-scroll-parallax'

const mediaQuery = (event, setSize) =>{
    if (event.matches) {
        // mobile screen
        const sizeHeight = window.screen.height
        setSize(`${sizeHeight}px`)
    } else {
        // hd screen
        setSize("100vh")
    }
}
const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight}px`)
}

const Header = (props) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState("1000px")

    useEffect(()=>{
        checkSizeHeight(setSize)
        match.addListener((e)=> mediaQuery(e, setSize))
    },[match])

    return (
        <ParallaxBanner
            layers={[
                {
                    image: '/assets/images/bg-header.jpg',
                    amount: 0.2,
                }
            ]}
            style={{
                height: size,
            }}
        >
            <div>
                <HeaderWrapper>
                    <span>
                        <Typist
                            cursor={{ show: false }}
                        >
                            Bienvenido a nuestra Página de Ingenieria Informática
                        </Typist>
                    </span>
                    <HeaderImage
                        src="/assets/images/img-header.png"
                    />
                </HeaderWrapper>
            </div>
        </ParallaxBanner>
    )
}

export default Header