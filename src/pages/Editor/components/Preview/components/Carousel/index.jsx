import React from 'react'
import uniqueId from 'lodash/uniqueId'
import uuidv1 from 'uuid/v1'
import SortableJS from 'react-sortablejs'

import { CarrouselContainer, CarrouselContainerInfo } from './style'
import { PlatformActive } from '../../../Platform/style'
import { Options } from '../../../../templates/Options'
import { OptionsRender } from '../../../../templates/Options'
import { useAlert } from 'react-alert'
import { Icon } from '@rmwc/icon'

const Carousel = ({
    items,
    orderItems,
    change,
    id,
    handleInfoEdit,
    active,
})=>{
    const alert = useAlert()
    const listUnSupported = ['PostList','CarrouselDefault', 'CarrouselImage', 'Contact', 'Footer', 'Author']
    const listItems = orderItems.map((i) => (
        <li
            key={uniqueId()}
            data-id={i} 
            style={{display:'inline-block',verticalAlign:'top',width: 700}}
            onClick={(e)=>{e.stopPropagation();handleInfoEdit(i, id)}}
        >
                <PlatformActive active={ active === i}>
                    {
                        OptionsRender[items[i].component](items[i].props)
                    }
                </PlatformActive>
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
                        put: true
                    }
                }}
                tag="ul"
                direction="horizontal"
                style={{ height: 345, listStyle: 'none', padding: 0, margin: 0 }}
                onChange={(order, sortable, evt) => {
                    let nameNew = ''
                    const newOrder = []
                    const idElement = uuidv1()
                    order.map(o => {
                        if (items[o]) {
                            newOrder.push(o)
                        } else {
                            nameNew = o
                            newOrder.push(idElement)
                        }
                        return 0
                    })

                    if (nameNew !== '') {
                        if(!listUnSupported.includes(nameNew)){
                            const itemEntry = JSON.stringify(items)
                            const newElement = {}
                            newElement[idElement] = Object.assign({}, Options[nameNew].initialConfig)
                            newElement[idElement]['id'] = idElement
                            newElement[idElement]['props']['id'] = idElement
                            const newItems = { ...JSON.parse(itemEntry), ...newElement }
                            change(id, { ...newItems }, newOrder)
                        }else{
                            alert.error(`${nameNew}, No compatible!`)
                        }
                    } else {
                        change(id, {...items}, newOrder)
                    }
                }}
            >
                { listItems }
            </SortableJS>
        </CarrouselContainer>
    )
}

export default Carousel