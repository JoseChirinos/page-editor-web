import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'

const HeaderEdit = ({
    title,
    bgUrl,
    imageUrl,
    change
}) => {
    const data = { title, bgUrl, imageUrl }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Cabecera
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
            </EditWrapper>
        </EditContainer>
    )
}

export default HeaderEdit
