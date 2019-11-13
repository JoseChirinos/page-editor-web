import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Radio } from '@rmwc/radio'
import { ChromePicker } from 'react-color'

/* Components */
import { EditContainer, EditWrapper, EditLabel, EditColor } from './style'

const DetailVideoEdit = ({
    id,
    title,
    content,
    videoUrl,
    videoPosition,
    bgColor,
    change
}) => {
    const data = { id, title, content, videoUrl, videoPosition, bgColor }
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
