import React from 'react'
import {
    AuthorContainer,
} from './style'

const Author = (props)=>{
    return(
        <AuthorContainer>
            Copyright ©  { new Date().getFullYear() }, Jose Chirinos
        </AuthorContainer>
    )
}

export default Author