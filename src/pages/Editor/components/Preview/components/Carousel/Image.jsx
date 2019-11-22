import React from 'react'
/* Components */
import SortableJS from 'react-sortablejs'
import { CarrouselContainer, CarrouselContainerInfo, CarroselImagePreview } from './style'
import { Icon } from '@rmwc/icon'
/* Data */
import { BASE_IMAGE } from '../../../../../@data/@server'

const CarouselImage = ({
    id,
    items,
    orderItems,
    change
}) => {
    const listItems = orderItems.map((i) => (
        <li
            key={i}
            data-id={i} 
            style={{display:'inline-block',verticalAlign:'top',width: 370}}
        >
            <CarroselImagePreview
                background={`${BASE_IMAGE}/${items[i].imageUrl}`}
            />
        </li>
    ))
    return (
        <CarrouselContainer>
            <CarrouselContainerInfo>
                <Icon icon="info" />
            </CarrouselContainerInfo>
            <SortableJS
                options={{
                    animation: 150,
                    group: {
                        name: 'clone1',
                        pull: false,
                        put: false
                    }
                }}
                tag="ul"
                direction="horizontal"
                style={{ height: 345, listStyle: 'none', padding: 0, margin: 0 }}
                onChange={(order, sortable, evt) => {
                    change(id,items, order)
                }}
            >
                { listItems }
            </SortableJS>
        </CarrouselContainer>
    )
}

export default CarouselImage