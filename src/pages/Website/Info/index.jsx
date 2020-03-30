import React from 'react'
import Navigator from '../../../components/Navigator'
import Frame from '../../../components/Frame'

const Info = (props)=>{
    return(
        <div>
            <Navigator
                color={`#000`}
            />
            <Frame
                url={`/assets/info/index.html`}            
            />
        </div>
    )
}
export default Info
