import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'

const ContactEdit = ({
    id,
}) => {
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Contacto
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
            <EditLabel label="Importante" icon="info" />
            <EditWrapper>
                <Typography use="body2" tag="span">
                    Los mensajes que se reciba
                    pueden ser vistos solo por los administradores
                </Typography>
            </EditWrapper>
        </EditContainer>
    )
}

export default ContactEdit
