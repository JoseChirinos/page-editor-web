import React, { useState } from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const flickityOptions = {
    initialIndex: 0,
    draggable: '>1',
    adaptiveHeight: false,
}

const elementAction = (e, setUrlImage, setOpen, setIndex)=>{
    e.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
        setIndex(cellIndex)
        setOpen(true)
        setUrlImage(cellElement.src)
    });
}
const CarouselImage = ({
    children
}) => {
    const [open, setOpen] = useState(false)
    const [urlImage, setUrlImage] = useState('')
    const [index, setIndex] = useState(0)
    return (
        <section>
            <Flickity
                className="carousel-images"
                elementType={'div'} // default 'div'
                options={{
                    ...flickityOptions,
                    initialIndex: index
                }} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                flickityRef={ (e)=> elementAction(e, setUrlImage, setOpen, setIndex) }
            >
                {children}
            </Flickity>
            { open && (
                <Lightbox
                    mainSrc={ urlImage }
                    onCloseRequest={() => setOpen(false)}
                />
            )}
        </section>
    )
}
CarouselImage.propsTypes = {
    children: PropTypes.array
}

export default CarouselImage