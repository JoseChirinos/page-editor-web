import React, { useEffect, useState } from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import ReactPlayer from 'react-player'
import { Button } from '@rmwc/button'
import { NavLink } from 'react-router-dom'

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
    linkAction,
    linkLabel,
    linkExternal,
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
                    {
                        linkExternal==="true" ?
                        <a rel="noopener noreferrer" href={linkAction} target="_blank">
                            <Button raised>{linkLabel===""? "ACCION":linkLabel}</Button>
                        </a>
                        :
                        <NavLink to={linkAction}>
                            <Button raised>{linkLabel===""? "ACCION":linkLabel}</Button>
                        </NavLink>
                    }
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
    linkAction: PropTypes.string,
    linkLabel: PropTypes.string,
    linkExternal: PropTypes.string,
}
DetailVideo.defaultProps = {
    videoPosition: 'left',
    videoUrl: '',
    bgColor: '#000',
    linkAction:"/",
    linkLabel: "ACCION",
    linkExternal: "false",
}
export default DetailVideo