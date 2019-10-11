import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage } from './style'
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

const Detail = ({
    positionImage
}) => {
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
                <DetailWrapper
                    positionImage = { positionImage }
                >
                    <span>
                        En que consiste la carrera de Ingenieria Informática?
                        <p>
                            La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.
                        </p>
                    </span>
                    <DetailImage
                        src="/assets/images/img-header.png"
                    />
                </DetailWrapper>
            </div>
        </ParallaxBanner>
    )
}

Detail.propTypes = {
    positionImage: PropTypes.oneOf(['left','right'])
}
Detail.defaultProps = {
    positionImage: 'left'
}
export default Detail