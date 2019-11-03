import React from 'react'
import Sortable from './Sortable'
import {
    List,
    CollapsibleList,
    SimpleListItem
} from '@rmwc/list'
import '@material/list/dist/mdc.list.css'
import '@rmwc/list/collapsible-list.css'

const RenderOptions = ({
    options
}) => {
    return (
        <List>
            <CollapsibleList
                handle={
                    <SimpleListItem
                        text="Cabecera"
                        metaIcon="chevron_right"
                    />
                }
            >
                <Sortable
                    listOptions={options}
                    group="Header"
                />
            </CollapsibleList>

            <CollapsibleList
                handle={
                    <SimpleListItem
                        text="Detalles"
                        metaIcon="chevron_right"
                    />
                }
            >
                <Sortable
                    listOptions={options}
                    group="Detail"
                />
            </CollapsibleList>

            <CollapsibleList
                handle={
                    <SimpleListItem
                        text="Post List"
                        metaIcon="chevron_right"
                    />
                }
            >
                <Sortable
                    listOptions={options}
                    group="Post"
                />
            </CollapsibleList>

            <CollapsibleList
                handle={
                    <SimpleListItem
                        text="Slider Carrousel"
                        metaIcon="chevron_right"
                    />
                }
            >
                <Sortable
                    listOptions={options}
                    group="Carrousel"
                />
            </CollapsibleList>

            <CollapsibleList
                handle={
                    <SimpleListItem
                        text="Otros"
                        metaIcon="chevron_right"
                    />
                }
            >
                <Sortable
                    listOptions={options}
                    group="Other"
                />
            </CollapsibleList>
        </List>
    )
}

export default RenderOptions
