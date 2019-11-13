import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'

const HeaderEdit = ({
    id,
    title,
    bgUrl,
    imageUrl,
    change
}) => {
    const data = { id, title, bgUrl, imageUrl }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Cabecera
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
            </EditWrapper>
        </EditContainer>
    )
}

export default HeaderEdit
