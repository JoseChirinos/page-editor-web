import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, HeaderImage } from './style'
import Typist from 'react-typist'
import { Parallax } from 'react-parallax'
/* Data */
import { BASE_IMAGE } from '../../pages/@data/@server'

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
            bgImage={ bgUrl!=='' ? `${BASE_IMAGE}/${bgUrl}`: ``}
            strength={400}
            style={{
                backgroundColor: '#000'
            }}
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
                            src={ `${BASE_IMAGE}/${imageUrl}` }
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