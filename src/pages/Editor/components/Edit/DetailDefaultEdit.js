import React, { useState } from 'react'
import '@rmwc/icon/icon.css'
/* Components */
import {
    EditContainer,
    EditWrapper,
    EditLabel,
    EditColor,
    EditImagePreview,
    EditImage,
} from './style'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Radio } from '@rmwc/radio'
import { ChromePicker } from 'react-color'
import { Icon } from '@rmwc/icon'
import CropModal from '../../../../components/Crop/CropModal'

/* Data */
import GaleryHttp from '../../../@data/galery-http'

const DetailDefaultEdit = ({
    id,
    title,
    content,
    bgUrl,
    idBgUrl,
    imageUrl,
    idImageUrl,
    imagePosition,
    bgColor,
    change
}) => {
    const data = { id, title, content, bgUrl, idBgUrl, imageUrl, idImageUrl, imagePosition, bgColor }
    const [imageModal, imageToggleModal] = useState(false)
    const [bgModal, bgToggleModal] = useState(false)
    const imageFormat = {
        thumb: false,
        format: 'png',
        size: {
            width: 350,
            height: 350
        }
    }
    const bgFormat = {
        thumb: false,
        format: 'jpeg',
        size: {
            width: 950,
            height: 450
        }
    }

    const deleteImage = (id, type) => { //type true=image, false=bg
        GaleryHttp.delete({ idGalery: id },
            (response) => {
                if (response.status) {
                    if (type) {
                        change({ ...data, idImageUrl: 0, imageUrl: '' })
                    } else {
                        change({ ...data, idBgUrl: 0, bgUrl: '' })
                    }
                }
            },
            (error) => {
                alert('No fue posible eliminar', error.message);
            })
    }

    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Detalle Default
            </Typography>
            <EditLabel label="ID" />
            <EditWrapper>
                <TextField
                    disabled
                    outlined
                    type="text"
                    label="Component ID"
                    onChange={() => { }}
                    value={id}
                />
            </EditWrapper>

            <EditLabel label="Redacción" />
            <EditWrapper>
                <TextField
                    outlined
                    type="text"
                    label="Titulo"
                    value={title}
                    onChange={(e) => change({ ...data, title: e.currentTarget.value })}
                    characterCount
                    maxLength={50}
                />

                <TextField
                    outlined
                    textarea
                    type="text"
                    label="Contenido"
                    value={content}
                    onChange={(e) => change({ ...data, content: e.currentTarget.value })}
                    characterCount
                    maxLength={150}
                />
            </EditWrapper>

            <EditLabel label="Posición Imagen" />
            <EditWrapper>
                <Radio
                    value="left"
                    checked={imagePosition === 'left'}
                    onChange={evt => change({ ...data, imagePosition: evt.currentTarget.value })}
                >
                    Izquierda
                </Radio>

                <Radio
                    value="right"
                    checked={imagePosition === 'right'}
                    onChange={evt => change({ ...data, imagePosition: evt.currentTarget.value })}
                >
                    Derecha
                </Radio>
            </EditWrapper>

            <EditLabel label="Color de Fondo" />
            <EditColor>
                <ChromePicker
                    style={{ width: 170 }}
                    color={bgColor}
                    disableAlpha
                    onChange={(color) => change({ ...data, bgColor: color.hex })}
                />
            </EditColor>

            <EditLabel label="Imagen" />
            <EditWrapper>
                {
                    imageUrl !== '' ?
                        <EditImagePreview
                            image={imageUrl}
                            onClick={() => { deleteImage(idImageUrl, true) }}
                        >
                            <div />
                        </EditImagePreview>
                        :
                        <EditImage
                            onClick={() => { imageToggleModal(true) }}
                        >
                            <Icon icon={{ icon: 'add_photo_alternate', size: 'xlarge' }} />
                        </EditImage>
                }
            </EditWrapper>
            <CropModal
                setImage={({ idGalery, urlImage }) => { change({ ...data, idImageUrl: idGalery, imageUrl: urlImage }) }}
                image={imageFormat}
                modal={imageModal}
                toggleModal={imageToggleModal}
            />

            <EditLabel label="Imagen de Fondo" />
            <EditWrapper>
                {
                    bgUrl !== '' ?
                        <EditImagePreview
                            image={bgUrl}
                            onClick={() => { deleteImage(idBgUrl, false) }}
                        >
                            <div />
                        </EditImagePreview>
                        :
                        <EditImage
                            onClick={() => { bgToggleModal(true) }}
                        >
                            <Icon icon={{ icon: 'add_photo_alternate', size: 'xlarge' }} />
                        </EditImage>
                }
            </EditWrapper>
            <CropModal
                setImage={({ idGalery, urlImage }) => { change({ ...data, idBgUrl: idGalery, bgUrl: urlImage }) }}
                image={bgFormat}
                modal={bgModal}
                toggleModal={bgToggleModal}
            />

        </EditContainer>
    )
}

export default DetailDefaultEdit
