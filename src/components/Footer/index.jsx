import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterInfo,
} from './style'
import { BASE_IMAGE } from '../../pages/@data/@server'

const Footer = ({
    imageUrl,
    address,
    email,
    cellphone,
    website
})=>{
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo>
                    {
                        imageUrl !== "" ?
                        <img src={`${BASE_IMAGE}/${imageUrl}`} alt=''/>
                        :
                        <img src='/website/assets/images/escudo_informatica.jpg' alt=''/>
                    }
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
