import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import { Parallax } from 'react-parallax'

const mediaQuery = (setSize) =>{
    checkSizeHeight(setSize)
}
const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight}px`)
}

const Simple = ({
    title,
    content,
    bgUrl,
}) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState('100vh')

    useEffect(()=>{
        checkSizeHeight(setSize)
        match.addListener((e)=> mediaQuery(e, setSize))
    },[match])

    return (
        <Parallax
            bgImage={bgUrl}
            strength={400}
        >
            <div>
                <DetailWrapper
                    heightSize = { size }
                    imagePosition = 'right'
                >
                    <span
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        { title }
                        <p>
                            { content }
                        </p>
                        <DetailAction
                            style={{
                                margin: '0 auto'
                            }}
                        >

                        </DetailAction>
                    </span>
                </DetailWrapper>
            </div>
        </Parallax>

    )
}

Simple.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bgUrl: PropTypes.string.isRequired,
}
Simple.defaultProps = {
    imageUrl: '',
}
export default Simple