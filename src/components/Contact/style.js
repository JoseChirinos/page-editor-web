import styled from 'styled-components'

export const ContactContainer = styled.div`
    width: 100%;
    padding: 50px 0px;
`
export const ContactTitle = styled.div`
    font-family: 'Sarala', sans-serif;
    text-align: center;
    > h1 small{
        display: block;
        font-family: 'Lato',sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: #a9a9a9;
        font-style: italic;
    }
`
export const ContactForm = styled.form`
    margin: 0 auto;
    width: 80%;
    @media (min-width:760px) {
        width: 600px;
    }
`
export const ContactSeparate = styled.div`
    height: 30px;
`
export const ContactSend = styled.div`
    text-align: center;
`