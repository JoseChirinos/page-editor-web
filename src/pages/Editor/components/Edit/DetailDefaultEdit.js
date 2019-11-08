import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { Radio } from '@rmwc/radio'
import { ChromePicker } from 'react-color'

/* Components */
import { EditContainer, EditWrapper, EditLabel, EditColor } from './style'

const HeaderEdit = ({
    title,
    content,
    imageUrl,
    imagePosition,
    bgUrl,
    bgColor,
    change
}) => {
    const data = { title, content, imageUrl, imagePosition, bgUrl, bgColor }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Detalle Default
            </Typography>

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
                    maxLength={200}
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

        </EditContainer>
    )
}

export default HeaderEdit
