import React from 'react'
import Navigator from '../../components/Navigator'

const MainSite = ({ signOut, children }) => {
    return (
        <div>
            <Navigator signOut={signOut} />
            {children}
        </div>
    )
}

export default MainSite
