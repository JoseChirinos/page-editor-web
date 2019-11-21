import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
/* Components */
import {
    EditContainer,
    EditWrapper,
    EditLabel,
    EditImageWrapper,
    EditImage,
    EditImagePreview,
} from './style'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import { List } from '@rmwc/list'
import { Icon } from '@rmwc/icon'
import CropModal from '../../../../components/Crop/CropModal'

/* Data */
import GaleryHttp from '../../../@data/galery-http'

const CarrouselImageEdit = ({
    id,
    items,
    orderItems,
    change
}) => {
    const data = { id, items, orderItems }
    const [imageModal, imageToggleModal] = useState(false)
    const imageFormat = {
        thumb: true,
        format: 'jpeg',
        size: {
            width: 800,
            height: 800
        }
    }
    const deleteImage = (idImage, idElement) => {
        GaleryHttp.delete({ idGalery: idImage },
            (response) => {
                if (response.status) {
                    let newItems = Object.assign({}, items)
                    delete newItems[idElement]
                    let orderCopy = orderItems.slice()
                    const indexOrder = orderCopy.indexOf(idElement)
                    orderCopy.splice(indexOrder, 1)
                    change({
                        ...data,
                        orderItems: orderCopy,
                        items: newItems
                    })
                }
            },
            (error) => {
                alert('No fue posible eliminar', error.message);
            })
    }
    return (
        <EditContainer>
            <Typography use="overline" tag="h6">
                Carrousel Imagenes
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
            <EditLabel label="Imagenes" icon="collections" />
            <EditWrapper>
                <Typography use="body2" tag="span">
                    Puede agregar imagenes y ordernarlas
                </Typography>
            </EditWrapper>

            <EditLabel label="Agregar Imagen" />
            <EditWrapper>
                <EditImage
                    onClick={() => { imageToggleModal(true) }}
                >
                    <Icon icon={{ icon: 'add_photo_alternate', size: 'xlarge' }} />
                </EditImage>
            </EditWrapper>
            <CropModal
                setImage={({ idGalery, urlImage }) => {
                    const itemEntry = JSON.stringify(items)
                    const idElement = uuidv1()
                    const newOrderItems = [...orderItems, idElement]
                    const newElement = {}
                    newElement[idElement] = {
                        id: idElement,
                        idImageUrl: idGalery,
                        imageUrl: urlImage
                    }
                    const newItems = { ...JSON.parse(itemEntry), ...newElement }
                    change({
                        ...data,
                        orderItems: newOrderItems,
                        items: newItems
                    })
                }}
                image={imageFormat}
                modal={imageModal}
                toggleModal={imageToggleModal}
            />

            {
                orderItems.length > 0 && <EditLabel label="Elementos" />
            }
            <List>
                {
                    orderItems.map((order, index) =>
                        <EditImageWrapper key={index}>
                            <EditImagePreview
                                image={items[order].imageUrl}
                                onClick={() => { deleteImage(items[order].idImageUrl, order) }}
                            >
                                <div />
                            </EditImagePreview>
                        </EditImageWrapper>
                    )
                }
            </List>
        </EditContainer>
    )
}

export default CarrouselImageEdit
