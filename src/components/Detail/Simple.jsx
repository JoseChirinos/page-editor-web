import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import { Parallax } from 'react-parallax'
import { Button } from '@rmwc/button';

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
    bgColor,
}) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState('100vh')

    useEffect(()=>{
        checkSizeHeight(setSize)
        match.addListener((e)=> mediaQuery(setSize))
    },[match])

    return (
        <Parallax
            bgImage={bgUrl}
            strength={500}
            style={{
                width: '100%'
            }}
        >
            <div>
                <DetailWrapper
                    heightSize = { size }
                    imagePosition = 'right'
                    bgColor = { bgColor }
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
                            <Button raised>Accion</Button>
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
    bgColor: PropTypes.string,
}
Simple.defaultProps = {
    imageUrl: '',
    bgColor: 'transparent',
}
export default Simple