import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "react-image-lightbox/style.css";
import './styles.css'

/* Components */
import Flickity from 'react-flickity-component'
import Lightbox from "react-image-lightbox";

/* Data */
import { BASE_IMAGE } from '../../pages/@data/@server'
const flickityOptions = {
    initialIndex: 0,
    draggable: '>1',
    adaptiveHeight: false,
}

const elementAction = (e, setUrlImage, setOpen, setIndex)=>{
    e.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
        if(typeof(cellIndex)!=="undefined"){
            setIndex(cellIndex)
            setOpen(true)
            setUrlImage(cellElement.src)
        }
    });
}
const CarouselImage = ({
    items,
    orderItems
}) => {
    const [open, setOpen] = useState(false)
    const [urlImage, setUrlImage] = useState('')
    const [index, setIndex] = useState(0)
    console.log(items)
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
                {
                    orderItems.map( (el)=>(
                        <img src={`${BASE_IMAGE}/${items[el].imageUrl}`} alt="" key={el}/>
                    ))
                }
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