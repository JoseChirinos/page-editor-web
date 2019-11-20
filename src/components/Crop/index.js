import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import './styles.css';
/* Components */
import Croppie from 'croppie'
import Zone from './components/zone'

const croppie = {
    cpp: null,
    init: (el, width, height) => {
        if (!croppie.cpp) {
            const element = el.current
            let widthVp = 300, heightVp = 300
            if (width > height) {
                heightVp = (height * widthVp) / width
            } else {
                widthVp = (width * heightVp) / height
            }
            croppie.cpp = new Croppie(element, {
                viewport: { width: widthVp, height: heightVp },
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
    formatPermission: (format) => {
        return ['png', 'jpeg'].includes(format)
    },
    destroy: () => {
        croppie.cpp.destroy();
        croppie.cpp = null;
    }
}

const Crop = forwardRef(({
    size: {
        width,
        height
    }
}, ref) => {
    const domRef = useRef(null);
    const [showPreview, setShowPreview] = useState(false)


    const getResult = (fn, format) => {
        const formatImage = format || 'jpeg'
        const formatCompact = croppie.formatPermission(formatImage) ? formatImage : 'jpeg'
        const crp = croppie.get()
        crp.result({ type: 'base64', format: formatCompact, size: { width, height } })
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
        croppie.init(domRef, width, height)
    }, [domRef, width, height])

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

Crop.propTypes = {
    size: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }).isRequired,
}

export default Crop
