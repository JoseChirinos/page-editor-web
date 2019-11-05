import React from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper, HeaderImage, IconPreview } from './style'
import Typist from 'react-typist'

const Header = ({
    title,
    bgUrl,
    imageUrl
}) => {
    return (
        <div>
            <HeaderWrapper
                heightSize = '350px'
                background = { bgUrl }
            >
                <span>
                    <Typist
                        cursor={{ show: false }}
                    >
                        { title }
                    </Typist>
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
        </div>
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