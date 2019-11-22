import React from 'react'
/* Components */
import Detail from '../../components/Detail'

const About = (props) => {
    return (
        <Detail
            title='Sobre el sitio web'
            content='Desarrollado por Jaime Rojas, con las tecnologias de ReactJS y PHP 7, como resultado este sitio web dinamico.'
            imageUrl='/assets/images/whois.png'
            imagePosition='right'
            bgColor="#000"
            linkAction="/"
            linkLabel="Volver"
        />
    )
}

export default About
