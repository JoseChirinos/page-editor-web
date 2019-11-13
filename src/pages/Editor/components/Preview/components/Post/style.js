import styled from 'styled-components'
import { Card } from '@rmwc/card'

export const PostContainer = styled.section`
    padding: 30px 0px;
    background: #f6f6f6;
    border: 2px dashed #f2d31b;
    box-sizing: border-box;
    user-select: none;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
`
export const PostWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 10px 0px;
`
export const PostTitle = styled.div`
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
export const PostMore = styled.div`
    text-align: center;
`
export const CardItem = styled(Card)`
    width: 200px;
    margin: 20px auto;
`