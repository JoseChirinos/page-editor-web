import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import '@material/fab/dist/mdc.fab.css';
/* Components */
import Crop from './index'
import { Fab } from '@rmwc/fab'
import { Icon } from '@rmwc/icon'
/* Data */
import GaleryHttp from '../../pages/@data/galery-http'

const CropModal = ({
    setImage,
    image: {
        thumb,
        format,
        size: {
            width,
            height
        }
    },
    modal,
    toggleModal,
}) => {
    const cropRef = React.createRef()

    const saveImage = () => {
        const data = {}
        cropRef.current.getResult((data64) => {
            data.cover_image = data64
            data.thumb = thumb
            data.format = format
            saveServer(data)
        }, format)
    }

    const saveServer = (dataSend) => {
        GaleryHttp.add(dataSend,
            (data) => {
                console.log(data)
                if (data.status) {
                    setImage(data.result)
                }
                toggleModal(false)
            },
            (error) => {
                toggleModal(false)
            })
    }

    return (
        <div>
            {
                modal &&
                <section className="crop-container crop-modal">
                    <aside className="crop-wrapper">
                        <div className="crop-modal-close" onClick={() => { toggleModal(false) }}>
                            <Icon icon="close" />
                        </div>
                        <Crop ref={cropRef} size={{ width, height }} />
                        <Fab icon="check" label="Subir" onClick={(e) => { saveImage() }} />
                    </aside>
                </section>
            }
        </div>
    )
}

CropModal.propTypes = {
    setImage: PropTypes.func.isRequired,
    image: PropTypes.shape({
        thumb: PropTypes.bool,
        format: PropTypes.oneOf(['jpeg', 'png']),
        size: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number
        }).isRequired,
    }).isRequired,
    modal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
}

export default CropModal