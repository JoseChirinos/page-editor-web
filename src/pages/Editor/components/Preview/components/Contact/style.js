import styled from 'styled-components'

export const ContactContainer = styled.section`
    width: 100%;
    padding: 30px 0px;
    border: 2px dashed #f2d31b;
    box-sizing: border-box;
    user-select: none;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
`
export const ContactTitle = styled.div`
    font-family: 'Sarala', sans-serif;
    text-align: center;
    > h1 {
        font-size: 25px;
        small{
            display: block;
            font-family: 'Lato',sans-serif;
            font-weight: 100;
            font-size: 14px;
            color: #a9a9a9;
            font-style: italic;
        }
    }
`
export const ContactForm = styled.form`
    margin: 0 auto;
    width: 600px;
    transform: scale(0.8,0.8);
`
export const ContactSeparate = styled.div`
    height: 20px;
`
export const ContactSend = styled.div`
    text-align: center;
`