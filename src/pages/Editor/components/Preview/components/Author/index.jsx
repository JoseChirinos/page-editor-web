import React from 'react'
import {
    AuthorContainer,
} from './style'

const Author = ({
    authorName
})=>{
    return(
        <AuthorContainer>
            Copyright ©  { new Date().getFullYear() }, { authorName }
        </AuthorContainer>
    )
}

export default Author