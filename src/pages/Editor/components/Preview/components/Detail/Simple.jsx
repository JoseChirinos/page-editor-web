import React from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import { Button } from '@rmwc/button';
/* Data */
import { BASE_IMAGE } from '../../../../../@data/@server'

const Simple = ({
    title,
    content,
    bgUrl,
    bgColor,
    linkLabel,
}) => {
    return (
        <DetailWrapper
            heightSize = '350px'
            imagePosition = 'right'
            background = { `${bgUrl !== '' && `${BASE_IMAGE}/${bgUrl}`}` }
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
                    <Button raised>{ linkLabel === ""? "ACCION": linkLabel }</Button>
                </DetailAction>
            </span>
        </DetailWrapper>

    )
}

Simple.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bgUrl: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    linkLabel: PropTypes.string,
}
Simple.defaultProps = {
    bgColor: 'transparent',
    linkLabel: "ACCION",
}
export default Simple