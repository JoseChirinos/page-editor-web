import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction } from './style'
import { Parallax } from 'react-parallax'

const mediaQuery = (setSize) =>{
    checkSizeHeight(setSize)
}
const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight}px`)
}

const Detail = ({
    title,
    content,
    imageUrl,
    imagePosition,
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
                    imagePosition = { imagePosition }
                    heightSize = { size }
                >
                    <span>
                        { title }
                        <p>
                            { content }
                        </p>
                        <DetailAction>

                        </DetailAction>
                    </span>
                    {
                        imageUrl !== ''?
                        <DetailImage
                            src = { imageUrl }
                        />
                        :
                        <span />
                    }
                </DetailWrapper>
            </div>
        </Parallax>

    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left','right']),
    bgUrl: PropTypes.string.isRequired,
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageUrl: '',
}
export default Detail