import React from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailAction } from './style'
import { Button } from '@rmwc/button';


const Simple = ({
    title,
    content,
    bgUrl,
    bgColor,
}) => {
    console.log(title, content, bgUrl, bgColor)
    return (
        <DetailWrapper
            heightSize = '350px'
            imagePosition = 'right'
            background = { bgUrl }
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

    )
}

Simple.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bgUrl: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
}
Simple.defaultProps = {
    bgColor: 'transparent',
}
export default Simple