import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import { Parallax } from 'react-parallax'
import { Button } from '@rmwc/button';
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

const Simple = ({
    title,
    content,
    bgUrl,
    bgColor,
    linkAction,
    linkLabel,
    linkExternal,
}) => {
    console.log(bgUrl)
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
    linkAction: PropTypes.string,
    linkLabel: PropTypes.string,
    linkExternal: PropTypes.string,
}
Simple.defaultProps = {
    imageUrl: '',
    bgColor: 'transparent',
    linkAction:"/",
    linkLabel: "ACCION",
    linkExternal: "false",
}
export default Simple