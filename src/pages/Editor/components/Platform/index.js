import React, { useState } from 'react'
import '../../../@style/sort.css'
import uuidv1 from 'uuid/v1'
import Sortable from 'react-sortablejs'
import {
    PlatformContainer,
    PlatformPreview,
    PlatformTools,
    PlatformActive,
} from './style'
import RenderOptions from './RenderOptions'
import { OptionsRender } from '../../templates/Options'
import { OptionsEdit } from '../../templates/Options'

const Platform = ({
    items,
    change,
    itemsOrder,
    changeOrder,
    options,
}) => {
    const [editComponent, setEditComponent] = useState(null)
    const [index, setIndex] = useState([])
    const optionsFormatted = Object.entries(options)

    const changeSelf = (idElement, itemsElement, orderElement) => {
        const newElement = {}
        newElement[idElement] = items[idElement]
        newElement[idElement]['props']['items'] = itemsElement
        newElement[idElement]['props']['orderItems'] = orderElement
        change({ ...items, ...newElement })
    }

    const handleInfoEdit = (idElement, idParent) => {
        // console.log(idElement, idParent)
        if (idParent) {
            const component = items[idParent].props.items[idElement]
            setEditComponent(component)
            setIndex([idElement, idParent])
        } else {
            const component = items[idElement]
            setEditComponent(component)
            setIndex([idElement])
        }
    }

    const changeInfo = (newInfo) => {
        const len = index.length
        const element = {}
        if (len > 1) {
            const itemEntry = JSON.stringify(items)
            element[index[1]] = items[index[1]]
            element[index[1]]['props']['items'][index[0]]['props'] = newInfo
            const newItems = { ...JSON.parse(itemEntry), ...element }
            change({ ...newItems })
        } else {
            element[index[0]] = items[index[0]]
            element[index[0]]['props'] = newInfo
            change({ ...items, ...element })
        }
    }
    const listItems = itemsOrder.map((i) => (
        <li key={i} data-id={i} onClick={(e) => { e.stopPropagation(); handleInfoEdit(i) }}>
            {
                items[i].component === 'CarrouselDefault' ?
                    OptionsRender[items[i].component](items[i].props, changeSelf, i, handleInfoEdit, `${index[1] === i ? index[0] : null}`)
                    :
                    <PlatformActive active={index[0] === i}>
                        {
                            OptionsRender[items[i].component](items[i].props, changeSelf, i) // props for all
                        }
                    </PlatformActive>
            }
        </li>
    ))
    return (
        <PlatformContainer>
            <PlatformTools>
                {
                    editComponent ?
                        OptionsEdit[editComponent.editInfo](editComponent.props, changeInfo)
                        : null
                }
            </PlatformTools>
            <PlatformPreview>
                <Sortable
                    options={{
                        animation: 350,
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
                            const itemEntry = JSON.stringify(items)
                            const newElement = {}
                            newElement[idElement] = Object.assign({}, options[nameNew].initialConfig)
                            newElement[idElement]['id'] = idElement
                            newElement[idElement]['props']['id'] = idElement
                            const newItems = { ...JSON.parse(itemEntry), ...newElement }
                            change({ ...newItems })
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
