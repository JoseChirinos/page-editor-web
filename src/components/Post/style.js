import styled from 'styled-components'
import { Card } from '@rmwc/card'

export const PostWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    padding: 60px 0px;
    @media (min-width:760px) {
        flex-direction: row;
        padding: 100px 0px;
    }
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