import React, { useState } from 'react'
import Crop from '../../Crop'

const TestImage = (props) => {
    const cropRef = React.createRef()
    const [srcImage, setSrcImage] = useState('')

    const getImage = () => {
        cropRef.current.getResult((data64) => {
            setSrcImage(data64)
        })
    }

    return (
        <div>
            Solo prueba de uso
            <Crop ref={cropRef} size={{ width: 300, height: 300 }} />
            {
                srcImage !== '' ?
                    <img src={srcImage} alt='' />
                    :
                    null
            }
            {
                srcImage !== '' ?
                    <textarea defaultValue={srcImage}></textarea>
                    :
                    null
            }
            <button onClick={getImage}>
                getImage
            </button>
        </div>
    )
}

export default TestImage