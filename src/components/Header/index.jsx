import React, { useEffect, useState } from 'react'
import { HeaderWrapper, HeaderImage } from './style'
import Typist from 'react-typist'
import { ParallaxBanner } from 'react-scroll-parallax'

const mediaQuery = (setSize) =>{
    checkSizeHeight(setSize)
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
        match.addListener(()=> mediaQuery(setSize))
    },[match])

    return (
        <ParallaxBanner
            layers={[
                {
                    image: '/assets/images/bg-whois.jpg',
                    amount: 0.3,
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