import React from 'react'
import uniqueId from 'lodash/uniqueId'
import SortableJS from 'react-sortablejs'

import { CarrouselContainer } from './style'
import { Options } from '../../../../templates/Options'
import { OptionsRender } from '../../../../templates/Options'

const Carousel = ({
    items,
    orderItems,
    change,
    id
})=>{
    console.log(items,orderItems, change, id)
    const listSupported = ['DetailSimple', 'DetailDefault', 'DetailVideo']
    const listItems = orderItems.map((i) => (
        <li key={uniqueId()} data-id={i} style={{display:'inline-block',width: 700}}>
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
                    const idElement = uniqueId()
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
                        if(listSupported.filter(i=> nameNew === i)){
                            console.log('soportado')
                            const newElement = {}
                            newElement[idElement] = Options[nameNew].initialConfig
                            newElement[idElement]['id'] = idElement
                            change(id, { ...items, ...newElement }, newOrder)
                        }else{
                            console.log('no soportado')
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