import React, { useState } from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import {
    EditContainer,
    EditWrapper,
    EditLabel,
    EditImagePreview,
    EditImage,
} from './style'
import { Icon } from '@rmwc/icon'
import CropModal from '../../../../components/Crop/CropModal'
/* Data */
import GaleryHttp from '../../../@data/galery-http'

const FooterEdit = ({
    id,
    imageUrl,
    idImageUrl,
    address,
    email,
    cellphone,
    website,
    change
}) => {
    const data = { id, imageUrl, idImageUrl, address, email, cellphone, website }
    const [imageModal, imageToggleModal] = useState(false)
    const imageFormat = {
        thumb: false,
        format: 'png',
        size: {
            width: 350,
            height: 350
        }
    }
    const deleteImage = (id) => {
        GaleryHttp.delete({ idGalery: id },
            (response) => {
                if (response.status) {
                    change({ ...data, idImageUrl: 0, imageUrl: '' })
                }
            },
            (error) => {
                alert('No fue posible eliminar', error.message);
            })
    }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Footer
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
                    label="Dirección"
                    helpText="Escriba una dirección real"
                    value={address}
                    onChange={(e) => change({ ...data, address: e.currentTarget.value })}
                    characterCount
                    maxLength={150}
                />

                <TextField
                    outlined
                    type="email"
                    label="Correo Electronico"
                    helpText="Formato: user@mail.com"
                    value={email}
                    onChange={(e) => change({ ...data, email: e.currentTarget.value })}
                    characterCount
                    maxLength={80}
                />

                <TextField
                    outlined
                    type="text"
                    label="Celular"
                    helpText="Escriba un número de celular real"
                    value={cellphone}
                    onChange={(e) => change({ ...data, cellphone: e.currentTarget.value })}
                    characterCount
                    maxLength={80}
                />

                <TextField
                    outlined
                    type="url"
                    label="Sitio Web"
                    helpText="Formato: http://sitio.com"
                    value={website}
                    onChange={(e) => change({ ...data, website: e.currentTarget.value })}
                    characterCount
                    maxLength={200}
                />
            </EditWrapper>

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

        </EditContainer>
    )
}

export default FooterEdit
