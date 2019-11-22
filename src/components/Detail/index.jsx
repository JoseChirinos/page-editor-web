import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction } from './style'
import { Parallax } from 'react-parallax'
import { Button } from '@rmwc/button'
import { NavLink } from 'react-router-dom'

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
    bgColor,
    linkAction,
    linkLabel,
    linkExternal
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
            // disabled={ true }
            style={{
                width: '100%'
            }}
        >
            <div>
                <DetailWrapper
                    imagePosition = { imagePosition }
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
                                linkExternal ?
                                <a rel="noopener noreferrer" href={linkAction} target="_blank">
                                    <Button raised>{linkLabel}</Button>
                                </a>
                                :
                                <NavLink to={linkAction}>
                                    <Button raised>{linkLabel}</Button>
                                </NavLink>
                            }
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
    bgUrl: PropTypes.string,
    bgColor: PropTypes.string,
    linkAction: PropTypes.string,
    linkLabel: PropTypes.string,
    linkExternal: PropTypes.bool,
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageUrl: '',
    bgUrl: '',
    bgColor: 'transparent',
    linkAction:"/",
    linkLabel: "ACCION",
    linkExternal: false
}
export default Detail