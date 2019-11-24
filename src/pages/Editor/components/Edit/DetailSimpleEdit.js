import React, { useState } from 'react'
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon'
import { TextField } from '@rmwc/textfield'
import { ChromePicker } from 'react-color'
import { Radio } from '@rmwc/radio'
import { Select } from '@rmwc/select'
import CropModal from '../../../../components/Crop/CropModal'

/* Components */
import {
    EditContainer,
    EditWrapper,
    EditGroup,
    EditLabel,
    EditColor,
    EditImagePreview,
    EditImage,
} from './style'

/* Data */
import GaleryHttp from '../../../@data/galery-http'

const DetailSimpleEdit = ({
    id,
    title,
    content,
    idBgUrl,
    bgUrl,
    bgColor,
    linkAction,
    linkLabel,
    linkExternal,
    change
}) => {
    const data = { id, title, content, idBgUrl, bgUrl, bgColor, linkAction, linkLabel, linkExternal }
    const [bgModal, bgToggleModal] = useState(false)
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
                    change({ ...data, idBgUrl: 0, bgUrl: '' })
                }
            },
            (error) => {
                alert('No fue posible eliminar', error.message);
            })
    }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Detalle Simple
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

            <EditLabel label="Botón" />
            <EditWrapper>
                <EditGroup>
                    <Typography
                        use="caption"
                        style={{
                            display: 'inline-block',
                            margin: '16px 0px',
                        }}
                    >
                        Elija el tipo de acción:
                    </Typography>

                    <Radio
                        value={"false"}
                        checked={linkExternal === "false"}
                        onChange={evt => change({ ...data, linkExternal: evt.currentTarget.value, linkAction: '/' })}
                    >
                        Interno
                    </Radio>

                    <Radio
                        value={"true"}
                        checked={linkExternal === "true"}
                        onChange={evt => change({ ...data, linkExternal: evt.currentTarget.value, linkAction: 'https://google.com' })}
                    >
                        Externo
                    </Radio>

                    <Typography
                        use="caption"
                        style={{
                            display: 'inline-block',
                            margin: '16px 0px',
                        }}
                    >
                        Ingrese donde ir:
                    </Typography>
                    {
                        linkExternal === "true" ?
                            <TextField
                                outlined
                                type="url"
                                label="Url del sitio"
                                value={linkAction}
                                onChange={(e) => change({ ...data, linkAction: e.currentTarget.value })}
                            />
                            :
                            <Select
                                helpText="Elija donde ir"
                                label="Elija uno"
                                value={linkAction}
                                onChange={(e) => change({ ...data, linkAction: e.currentTarget.value })}
                                options={
                                    [
                                        { label: 'Inicio', value: '/' },
                                        { label: 'Posts', value: '/posts' },
                                        { label: 'Login', value: '/login' },
                                        { label: 'Registar', value: '/registrar' },
                                        { label: 'About', value: '/about' },
                                    ]
                                }
                            />
                    }
                    <Typography
                        use="caption"
                        style={{
                            display: 'inline-block',
                            margin: '16px 0px',
                        }}
                    >
                        Ingrese label:
                    </Typography>
                    <TextField
                        outlined
                        type="text"
                        label="Label"
                        value={linkLabel}
                        onChange={(e) => change({ ...data, linkLabel: e.currentTarget.value })}
                    />

                </EditGroup>

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

export default DetailSimpleEdit
