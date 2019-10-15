import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterInfo,
} from './style'

const Footer = (props)=>{
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo>
                    <img src='/assets/images/escudo_informatica.jpg'/>
                </FooterLogo>
                <FooterInfo>
                    <h3>Dirección</h3>
                    <p>
                        Calle Regimiento Caravineros Nro. 202
                        Calle Regimiento Caravineros Nro. 202
                        Calle Regimiento Caravineros Nro. 202
                        Calle Regimiento Caravineros Nro. 202
                    </p>
                </FooterInfo>
                <FooterInfo>
                    <h3>Contactos</h3>
                    <ul>
                        <li><strong>Email:</strong> josealexcba@gmail.com</li>
                        <li><strong>Celular:</strong> 79413052</li>
                        <li><strong>Página Web:</strong> josechirinos.com</li>
                    </ul>
                </FooterInfo>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
