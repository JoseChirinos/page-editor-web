import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import './styles.css'

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
}

const Carousel = ({
    children
}) => {
    return (
        <Flickity
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            {children}
        </Flickity>
    )
}
Carousel.propsTypes = {
    children: PropTypes.array
}

export default Carousel