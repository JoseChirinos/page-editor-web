import React from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, HeaderImage, IconPreview } from './style'
/* Data */
import { BASE_IMAGE } from '../../../../../@data/@server'

const Header = ({
    title,
    bgUrl,
    imageUrl
}) => {
    return (
        <HeaderWrapper
            heightSize = '350px'
            background = { `${bgUrl !== '' && `${BASE_IMAGE}/${bgUrl}`}` }
        >
            <span>
                { title }
            </span>
            {
                imageUrl !== ''?
                <HeaderImage
                    src={ `${imageUrl !== '' && `${BASE_IMAGE}/${imageUrl}`}` }
                />
                :
                <IconPreview icon="image" />
            }
        </HeaderWrapper>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    bgUrl: PropTypes.string.isRequired,
}
Header.defaultProps = {
    imageUrl: '',
}
export default Header