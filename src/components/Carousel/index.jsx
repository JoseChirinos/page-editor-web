import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import './styles.css'
import { ComponentsRender } from '../../pages/Website/components'

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
}

const Carousel = ({
    items,
    orderItems
}) => {
    return (
        <Flickity
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            {
                orderItems.map( (el)=>(
                    ComponentsRender[items[el].component](items[el].props, el)
                ))
            }
        </Flickity>
    )
}
Carousel.propsTypes = {
    children: PropTypes.array
}

export default Carousel