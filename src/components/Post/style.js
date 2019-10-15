import styled from 'styled-components'
import { Card } from '@rmwc/card'

export const PostContainer = styled.div`
    padding: 50px 0px;
    background: #f6f6f6;
`
export const PostWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    padding: 60px 0px;
    @media (min-width:760px) {
        flex-direction: row;
    }
`
export const PostTitle = styled.div`
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
export const PostMore = styled.div`
    text-align: center;
`
export const CardItem = styled(Card)`
    width: 80%;
    @media (min-width:960px) {
        width: 300px;
        margin: 20px;
    }
    @media (min-width:760px) {
        width: 280px;
        margin: 5px;
    }
`