import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'

const AuthorEdit = ({
    id,
    authorName,
    change
}) => {
    const data = { id, authorName }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Author
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
                    label="Autor Sitio Web"
                    value={authorName}
                    onChange={(e) => change({ ...data, authorName: e.currentTarget.value })}
                    characterCount
                    maxLength={50}
                />
            </EditWrapper>
        </EditContainer>
    )
}

export default AuthorEdit
