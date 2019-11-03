import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterInfo,
} from './style'

const Footer = ({
    address,
    email,
    cellphone,
    website
})=>{
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo>
                    <img src='/assets/images/escudo_informatica.jpg'alt=''/>
                </FooterLogo>
                <FooterInfo>
                    <h3>Dirección</h3>
                    <p>
                        { address }
                    </p>
                </FooterInfo>
                <FooterInfo>
                    <h3>Contactos</h3>
                    <ul>
                        <li><strong>Email:</strong> {email} </li>
                        <li><strong>Celular:</strong> {cellphone} </li>
                        <li><strong>Página Web:</strong> {website} </li>
                    </ul>
                </FooterInfo>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
