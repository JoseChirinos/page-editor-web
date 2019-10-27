import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react'
import './styles.css';
/* Components */
import Croppie from 'croppie'
import Zone from './components/zone'

const croppie = {
    cpp: null,
    init: (el) => {
        if (!croppie.cpp) {
            const element = el.current;
            croppie.cpp = new Croppie(element, {
                viewport: { width: 300, height: 150 },
                boundary: { width: 300, height: 300 },
                showZoomer: true,
                enableOrientation: false,
                enableResize: false,
            })
        }
    },
    get: () => {
        return croppie.cpp
    },
    set: (base64Image) => {
        croppie.cpp.bind({
            url: `data:image/jpeg;base64,${base64Image}`
        })
    },
    destroy: () => {
        croppie.cpp.destroy();
        croppie.cpp = null;
    }
}

const Crop = forwardRef((props, ref) => {
    const domRef = useRef(null);
    const [showPreview, setShowPreview] = useState(false)


    const getResult = (fn) => {
        const crp = croppie.get()
        crp.result({ type: 'base64', format: 'jpeg', size: { width: 900, height: 450 } })
            .then((base64) => {
                fn(base64)
            });
    }
    const handleChange = (e) => {
        const input = e.currentTarget
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.readAsBinaryString(input.files[0]);
            //reader.readAsDataURL(input.files[0]);
            reader.onload = function (e) {
                if (reader.result) reader.content = reader.result;
                var base64Image = btoa(reader.content);
                croppie.set(base64Image)
                setShowPreview(true)
            }
        }
    }

    useImperativeHandle(ref, () => ({
        getResult
    }))

    useEffect(() => {
        croppie.init(domRef)
    }, [domRef])

    useEffect(() => {
        return () => {
            croppie.destroy()
        }
    }, [])

    return (
        <div>
            <Zone
                handleChange={handleChange}
                showPreview={showPreview}
            >
                <aside ref={domRef}></aside>
            </Zone>
        </div>
    )
})

export default Crop
