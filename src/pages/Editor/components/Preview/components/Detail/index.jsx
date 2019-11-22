import React from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction, IconPreview } from './style'
import { Button } from '@rmwc/button';
/* Data */
import { BASE_IMAGE } from '../../../../../@data/@server'

const Detail = ({
    title,
    content,
    imageUrl,
    imagePosition,
    bgUrl,
    bgColor,
    linkLabel,
}) => {
    return (
        <DetailWrapper
            imagePosition = { imagePosition }
            background = { `${bgUrl !== '' && `${BASE_IMAGE}/${bgUrl}`}` }
            heightSize = '350px'
            bgColor = { bgColor }
        >
            <span>
                { title }
                <p>
                    { content }
                </p>
                <DetailAction>
                    <Button raised>{ linkLabel === ""? "ACCION": linkLabel }</Button>
                </DetailAction>
            </span>
            {
                imageUrl !== ''?
                <DetailImage
                    src={ `${imageUrl !== '' && `${BASE_IMAGE}/${imageUrl}`}` }
                />
                :
                <IconPreview icon="image" />
            }
        </DetailWrapper>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left','right']),
    bgUrl: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    linkLabel: PropTypes.string,
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageUrl: '',
    bgColor: 'transparent',
    linkLabel: "ACCION",
}
export default Detail