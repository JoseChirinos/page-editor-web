import React, { useState } from 'react'
import Platform from './components/Platform'
/* Options */
import { Options } from './templates/Options'

const Editor = (props) => {
    const [website, setWebsite] = useState([])
    return (
        <div>
            <Platform
                items={website}
                options={Options}
                change={setWebsite}
            />
        </div>
    )
}

export default Editor
