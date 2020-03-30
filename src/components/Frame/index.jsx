import React, { useState, useEffect } from 'react'
import {
    FrameContainer
} from './style'

const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight-180}px`)
}

const Frame = ({
    url
})=>{
    const [size, setSize] = useState('100vh')
    useEffect(()=>{
        checkSizeHeight(setSize)
    },[setSize])
    return(
        <FrameContainer>
            <iframe
                title="website loading"
                width="100%"
                height={size}
                src={url}
            ></iframe>
        </FrameContainer>
    )
}

export default Frame
