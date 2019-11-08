import React from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, HeaderImage, IconPreview } from './style'

const Header = ({
    title,
    bgUrl,
    imageUrl
}) => {
    return (
        <HeaderWrapper
            heightSize = '350px'
            background = { bgUrl }
        >
            <span>
                { title }
            </span>
            {
                imageUrl !== ''?
                <HeaderImage
                    src={ imageUrl }
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