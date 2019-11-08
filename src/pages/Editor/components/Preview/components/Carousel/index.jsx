import React from 'react'
import uniqueId from 'lodash/uniqueId'
import uuidv1 from 'uuid/v1'
import SortableJS from 'react-sortablejs'

import { CarrouselContainer } from './style'
import { Options } from '../../../../templates/Options'
import { OptionsRender } from '../../../../templates/Options'
import { useAlert } from 'react-alert'

const Carousel = ({
    items,
    orderItems,
    change,
    id,
    handleInfoEdit
})=>{
    const alert = useAlert()
    const listUnSupported = ['CarrouselDefault', 'CarrouselImage']
    const listItems = orderItems.map((i) => (
        <li
            key={uniqueId()}
            data-id={i} 
            style={{display:'inline-block',verticalAlign:'top',width: 700}}
            onClick={(e)=>{e.stopPropagation();handleInfoEdit(i, id)}}
        >
            {
                OptionsRender[items[i].component](items[i].props)
            }
        </li>
    ))
    return (
        <CarrouselContainer>
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
                            const newItems = { ...JSON.parse(itemEntry), ...newElement }
                            change(id, { ...newItems }, newOrder)
                        }else{
                            alert.error('No es posible hacer eso...')
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