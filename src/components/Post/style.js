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
        margin: 20px auto;
    }
    @media (min-width:760px) {
        width: 280px;
        margin: 5px auto;
    }
`


/* Preview Post */

export const PreviewContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
`
export const PreviewWrapper = styled.div`
    width: 100%;
    margin: 30px auto;
    @media (min-width:960px) {
        width: 960px;
        margin: 50px auto;
    }
    @media (min-width:760px) {
        width: 760px;
        margin: 40px auto;
    }
`
export const PreviewTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 300px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,0) 62%, rgba(0,0,0,0.39539565826330536) 82%, rgba(0,0,0,1) 100%);
    > aside {
        padding: 20px 0px;
        width: 100%;
        @media (min-width:960px) {
            width: 960px;
        }
        @media (min-width:760px) {
            width: 760px;
        }
    }
`