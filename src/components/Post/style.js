import styled from 'styled-components'
import { Card } from '@rmwc/card'

export const PostContainer = styled.div`
    padding: 50px 0px;
    background: #f6f6f6;
`
export const PostListWrapper = styled.div`
    padding: 0px;
    background: #f6f6f6;
    min-height: 100vh;
`
export const PostWrapper = styled.section`
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    justify-content: center;
    justify-items: center;

    @media (min-width:760px) {
        grid-template-columns: 280px 280px;
    }
    @media (min-width:960px) {
        grid-template-columns: 280px 280px 280px;
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
    padding: 50px 0px;
`
export const CardItem = styled(Card)`
    width: 80%;
    @media (min-width:760px) {
        width: 280px;
        margin: 5px auto;
    }
    @media (min-width:960px) {
        margin: 20px auto;
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
    @media (min-width:760px) {
        width: 760px;
        margin: 40px auto;
    }
    @media (min-width:960px) {
        width: 960px;
        margin: 50px auto;
    }
`
export const PreviewTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 400px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,0) 62%, rgba(0,0,0,0.39539565826330536) 82%, rgba(0,0,0,1) 100%);
    > aside {
        padding: 20px 0px;
        width: 100%;
        @media (min-width:760px) {
            width: 760px;
        }
        @media (min-width:960px) {
            width: 960px;
        }
    }
`