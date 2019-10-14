import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DetailWrapper, DetailImage, DetailAction } from './style'
import { ParallaxBanner } from 'react-scroll-parallax'

const mediaQuery = (event, setSize) =>{
    if (event.matches) {
        // mobile screen
        const sizeHeight = window.screen.height
        setSize(`${sizeHeight}px`)
    } else {
        // hd screen
        setSize("100vh")
    }
}
const checkSizeHeight = () => {
    return `${window.screen.height}px`
}

const Detail = ({
    title,
    content,
    imageUrl,
    imagePosition,
    bgUrl,
}) => {
    const  match = window.matchMedia('(max-width: 960px)')
    const [size, setSize] = useState('100vh')

    useEffect(()=>{
        const heightSize = checkSizeHeight();
        console.log(heightSize)
        setSize(heightSize)
        match.addListener((e)=> mediaQuery(e, setSize))
    },[match])

    return (
        <section>
            {
                size === ''?
                <span>Cargando...</span>
                :
                <ParallaxBanner
                    layers={[
                        {
                            image: bgUrl,
                            amount: 0.4,
                        }
                    ]}
                    style={{
                        height: size,
                    }}
                >
                    <div>
                        <DetailWrapper
                            imagePosition = { imagePosition }
                            heightSize = { size }
                        >
                            <span>
                                { title }
                                <p>
                                    { content }
                                </p>
                                <DetailAction>

                                </DetailAction>
                            </span>
                            {
                                imageUrl !== ''?
                                <DetailImage
                                    src = { imageUrl }
                                />
                                :
                                <span />
                            }
                        </DetailWrapper>
                    </div>
                </ParallaxBanner>
            }
        </section>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    imagePosition: PropTypes.oneOf(['left','right']),
    bgUrl: PropTypes.string.isRequired,
}
Detail.defaultProps = {
    imagePosition: 'left',
    imageUrl: '',
}
export default Detail