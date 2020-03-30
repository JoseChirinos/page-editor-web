import React, { useContext } from 'react'
/* Components */
import Detail from '../../components/Detail'
import Navigator from '../../components/Navigator'
/* Context */
import { UserContext } from '../../context/user-context'

const About = (props) => {
    const user = useContext(UserContext)
    return (
        <div>
            {
                Object.entries(user).length > 0 &&
                <Navigator />
            }
            <Detail
                title='Sobre el sitio web'
                content='Desarrollado por Jaime Rojas, con las tecnologias de ReactJS y PHP 7, como resultado este sitio web dinamico.'
                imageUrl='/assets/images/whois.png'
                imagePosition='right'
                imageSource="local"
                bgColor="#000"
                linkAction="/"
                linkLabel="Volver"
            />
        </div>
    )
}

export default About
