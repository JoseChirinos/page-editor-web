import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterInfo,
    IconPreview
} from './style'
/* Data */
import { BASE_IMAGE } from '../../../../../@data/@server'

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
                        imageUrl !== ''?
                        <img
                            src={ `${imageUrl !== '' && `${BASE_IMAGE}/${imageUrl}`}` }
                            alt=""
                        />
                        :
                        <IconPreview icon="image" />
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
