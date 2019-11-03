import React from 'react'
import uniqueId from 'lodash/uniqueId'
import SortableJS from 'react-sortablejs'

const Sortable = ({
    listOptions,
    group
}) => {
    return (
        <SortableJS
            options={{
                animation: 150,
                sort: false,
                group: {
                    name: 'clone1',
                    pull: 'clone',
                    put: false
                }
            }}
            tag="ul"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
        >
            {
                listOptions.map(option => (
                    option[1].group === group &&
                    <li key={uniqueId()} data-id={option[0]}>
                        {option[1].PreviewComponent}
                    </li>
                ))
            }
        </SortableJS>
    )
}

export default Sortable