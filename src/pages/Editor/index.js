import React, { useState } from 'react'
import Platform from './components/Platform'
/* Options */
import { Options } from './templates/Options'

const Editor = (props) => {
    const [website, setWebsite] = useState({})
    const [orderWeb, setOrderWeb] = useState([])
    return (
        <div>
            <Platform
                items={website}
                change={setWebsite}
                itemsOrder={orderWeb}
                changeOrder={setOrderWeb}
                options={Options}
            />
        </div>
    )
}

export default Editor
