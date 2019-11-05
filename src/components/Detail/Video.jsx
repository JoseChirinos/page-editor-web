import React, { useEffect, useState } from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import ReactPlayer from 'react-player'
import { Button } from '@rmwc/button';

const mediaQuery = (setSize) =>{
    checkSizeHeight(setSize)
}
const checkSizeHeight = (setSize) => {
    const sizeHeight = window.screen.height
    setSize(`${sizeHeight}px`)
}

const DetailVideo = ({
    title,
    content,
    videoUrl,
    videoPosition,
    bgColor,
}) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState('100vh')

    useEffect(()=>{
        checkSizeHeight(setSize)
        match.addListener((e)=> mediaQuery(setSize))
    },[match])

    return (
        <DetailWrapper
            imagePosition = { videoPosition }
            heightSize = { size }
            bgColor = { bgColor }
        >
            <span>
                { title }
                <p>
                    { content }
                </p>
                <DetailAction>
                    <Button raised>Accion</Button>
                </DetailAction>
            </span>
            {
                videoUrl !== ''?
                <ReactPlayer
                    className="react-player"
                    url = { videoUrl }
                    controls
                />
                :
                <span />
            }
        </DetailWrapper>
    )
}

DetailVideo.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    videoPosition: PropTypes.oneOf(['left','right']),
    bgColor: PropTypes.string,
}
DetailVideo.defaultProps = {
    videoPosition: 'left',
    videoUrl: '',
    bgColor: '#000',
}
export default DetailVideo