import React, { useState } from 'react'
import Crop from './index'

const TestImage = (props) => {
    const cropRef = React.createRef()
    const [srcImage, setSrcImage] = useState('')

    return (
        <div>
            Solo prueba de uso
            <Crop ref={cropRef} setSrcImage={setSrcImage} />
            {
                srcImage !== '' ?
                    <img src={srcImage} alt='' />
                    :
                    null
            }
            <button onClick={() => console.log(cropRef.current.getResult())}>
                getImage
            </button>
        </div>
    )
}

export default TestImage