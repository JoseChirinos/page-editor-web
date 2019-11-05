import React from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction, IconPreview } from './style'
import { Button } from '@rmwc/button';

const Detail = ({
    title,
    content,
    imageUrl,
    imagePosition,
    bgUrl,
    bgColor,
}) => {
    return (
        <DetailWrapper
            imagePosition = { imagePosition }
            background = { bgUrl }
            heightSize = '350px'
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
                imageUrl !== ''?
                <DetailImage
                    src = { imageUrl }
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
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageUrl: '',
    bgColor: 'transparent',
}
export default Detail