import React from 'react'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import {
    List,
    ListGroup,
    ListItem,
    ListItemText,
    ListItemPrimaryText,
    ListItemSecondaryText,
    ListItemMeta,
    ListDivider
} from '@rmwc/list'
import { AvatarCount } from '@rmwc/avatar'

/* Components */
import { EditContainer, EditWrapper, EditLabel } from './style'
import '@rmwc/avatar/avatar.css';

const CarrouselDefaultEdit = ({
    id,
    items,
    orderItems
}) => {
    console.log(id, items, orderItems)
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Carrousel Default
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
                    Se admite solo componentes de Cabecera y Detalles.
                </Typography>
            </EditWrapper>
            {
                orderItems.length > 0 && <EditLabel label="Elementos" />
            }
            <List>
                {
                    orderItems.map((itemName, index) =>
                        <ListGroup key={index}>
                            <ListItem style={{ height: 100 }}>
                                <ListItemText onClick={() => { }}>
                                    <ListItemPrimaryText>{items[itemName].component}</ListItemPrimaryText>
                                    <ListItemSecondaryText>{items[itemName].props.title}</ListItemSecondaryText>
                                </ListItemText>
                                <ListItemMeta>
                                    <AvatarCount size="xsmall" value={index + 1} />
                                </ListItemMeta>
                            </ListItem>
                            <ListDivider />
                        </ListGroup>
                    )
                }
            </List>
        </EditContainer>
    )
}

export default CarrouselDefaultEdit
