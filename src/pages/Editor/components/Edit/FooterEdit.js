import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

/* Components */
import { EditContainer, EditWrapper, EditLabel, EditColor } from './style'

const FooterEdit = ({
    id,
    address,
    email,
    cellphone,
    website,
    change
}) => {
    const data = { id, address, email, cellphone, website }
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

        </EditContainer>
    )
}

export default FooterEdit
