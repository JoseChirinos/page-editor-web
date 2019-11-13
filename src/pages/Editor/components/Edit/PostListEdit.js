import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'

const PostListEdit = ({
    id,
    title,
    subtitle,
    change,
}) => {
    const data = { id, title, subtitle }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Post Lista
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
                    type="text"
                    label="Sub Titulo"
                    value={subtitle}
                    onChange={(e) => change({ ...data, subtitle: e.currentTarget.value })}
                    characterCount
                    maxLength={50}
                />
            </EditWrapper>
        </EditContainer>
    )
}

export default PostListEdit
