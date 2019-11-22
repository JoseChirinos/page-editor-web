import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, HeaderImage } from './style'
import Typist from 'react-typist'
import { Parallax } from 'react-parallax'

const mediaQuery = (setSize) =>{
    checkSizeHeight(setSize)
}
const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight}px`)
}

const Header = ({
    title,
    bgUrl,
    imageUrl
}) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState("100vh")

    useEffect(()=>{
        checkSizeHeight(setSize)
        match.addListener(()=> mediaQuery(setSize))
    },[match])

    return (
        <Parallax
            bgImage={bgUrl}
            strength={400}
        >
            <div>
                <HeaderWrapper
                    heightSize = { size }
                >
                    <span>
                        <Typist
                            cursor={{ show: false }}
                        >
                            { title }
                        </Typist>
                    </span>
                    {
                        imageUrl !== "" &&
                        <HeaderImage
                            src={ imageUrl }
                        />
                    }
                </HeaderWrapper>
            </div>
        </Parallax>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    bgUrl: PropTypes.string.isRequired,
}
Header.defaultProps = {
    imageUrl: '',
}
export default Header