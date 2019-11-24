import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction } from './style'
import { Parallax } from 'react-parallax'
import { Button } from '@rmwc/button'
import { NavLink } from 'react-router-dom'
/* Data */
import { BASE_IMAGE } from '../../pages/@data/@server'

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
    imageSource,
    bgUrl,
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
        <Parallax
            bgImage={bgUrl!==""? `${BASE_IMAGE}/${bgUrl}`:``}
            strength={500}
            style={{
                width: '100%',
                backgroundColor: bgColor
            }}
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
                        imageUrl !== ''?
                        <DetailImage
                            src = { imageSource === "server"? `${BASE_IMAGE}/${imageUrl}`: imageUrl }
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
    imageSource: PropTypes.oneOf(['server','local']),
    bgUrl: PropTypes.string,
    bgColor: PropTypes.string,
    linkAction: PropTypes.string,
    linkLabel: PropTypes.string,
    linkExternal: PropTypes.string,
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageSource: 'server',
    imageUrl: '',
    bgUrl: '',
    bgColor: 'transparent',
    linkAction:"/",
    linkLabel: "ACCION",
    linkExternal: "false",
}
export default Detail