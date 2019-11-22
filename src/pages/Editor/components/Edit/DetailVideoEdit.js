import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Radio } from '@rmwc/radio'
import { Select } from '@rmwc/select'
import { ChromePicker } from 'react-color'

/* Components */
import { EditContainer, EditWrapper, EditGroup, EditLabel, EditColor } from './style'

const DetailVideoEdit = ({
    id,
    title,
    content,
    videoUrl,
    videoPosition,
    bgColor,
    linkAction,
    linkLabel,
    linkExternal,
    change
}) => {
    const data = { id, title, content, videoUrl, videoPosition, bgColor, linkAction, linkLabel, linkExternal }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Detalle Video
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

            <EditLabel label="Video" />
            <EditWrapper>
                <TextField
                    outlined
                    type="text"
                    label="Url del Video"
                    value={videoUrl}
                    onChange={(e) => change({ ...data, videoUrl: e.currentTarget.value })}
                />
                <Radio
                    value="left"
                    checked={videoPosition === 'left'}
                    onChange={evt => change({ ...data, videoPosition: evt.currentTarget.value })}
                >
                    Izquierda
                </Radio>

                <Radio
                    value="right"
                    checked={videoPosition === 'right'}
                    onChange={evt => change({ ...data, videoPosition: evt.currentTarget.value })}
                >
                    Derecha
                </Radio>
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

        </EditContainer>
    )
}

export default DetailVideoEdit
