import React from 'react'
import uniqueId from 'lodash/uniqueId'
import Sortable from 'react-sortablejs'
import {
    PlatformContainer,
    PlatformPreview,
    PlatformTools
} from './style'
import RenderOptions from './RenderOptions'
const Platform = ({
    items,
    options,
    change
}) => {
    const optionsFormatted = Object.entries(options)
    const listItems = items.map((item) => (<li key={uniqueId()} data-id={`${item[0]}-build`}>{item[1].PreviewComponent}</li>));
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
                        console.log(options)
                        console.log('product', options[order[0]])
                        // change([...items, order])
                    }}
                >
                    {listItems}
                </Sortable>
            </PlatformPreview>

            <PlatformTools>
                <RenderOptions options={optionsFormatted} />
            </PlatformTools>

        </PlatformContainer>
    )
}

export default Platform
