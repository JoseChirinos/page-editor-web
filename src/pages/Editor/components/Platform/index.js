import React from 'react'
import uniqueId from 'lodash/uniqueId'
import Sortable from 'react-sortablejs'
import {
    PlatformContainer,
    PlatformPreview,
    PlatformTools
} from './style'
import RenderOptions from './RenderOptions'
import { OptionsRender } from '../../templates/Options'

const Platform = ({
    items,
    change,
    itemsOrder,
    changeOrder,
    options,
}) => {
    const optionsFormatted = Object.entries(options)
    console.log(items)

    const changeSelf = (idElement, itemsElement, orderElement) => {
        const newElement = {}
        newElement[idElement] = items[idElement]
        newElement[idElement]['props']['items'] = itemsElement
        newElement[idElement]['props']['orderItems'] = orderElement
        change({ ...items, ...newElement })
    }
    const listItems = itemsOrder.map((i) => (
        <li key={uniqueId()} data-id={i}>
            {
                items[i].component === 'CarrouselDefault' ?
                    OptionsRender[items[i].component](items[i].props, changeSelf, i)
                    :
                    OptionsRender[items[i].component](items[i].props)
            }
        </li>
    ))
    return (
        <PlatformContainer>
            <PlatformPreview>
                <Sortable
                    options={{
                        animation: 150,
                        group: {
                            name: 'clone1',
                            pull: false,
                            put: true
                        }
                    }}
                    tag="ul"
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

                        console.log(newOrder)

                        if (nameNew !== '') {
                            const newElement = {}
                            newElement[idElement] = options[nameNew].initialConfig
                            newElement[idElement]['id'] = idElement
                            change({ ...items, ...newElement })
                            changeOrder(newOrder)
                        } else {
                            changeOrder(newOrder)
                        }

                    }}
                    style={{ height: 650, listStyle: 'none', padding: 0, margin: 0 }}
                >
                    {listItems}
                </Sortable>
            </PlatformPreview>

            <PlatformTools>
                <RenderOptions options={optionsFormatted} />
            </PlatformTools>

        </PlatformContainer >
    )
}

export default Platform
