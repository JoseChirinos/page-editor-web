import styled from 'styled-components'
import theme from '../../theme'

export const DetailWrapper = styled.section`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${ ({ bgColor }) => bgColor || 'transparent'};
    background-size: cover;
    color: ${theme.white};
    > span{
        width: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 1.5;
        text-shadow: 0px 1px 2px ${theme.black};
        padding: 20px;
        > p {
            padding: 20px 0px;
            font-size: 16px;
            font-family: 'Lato', sans-serif;
            text-shadow: 0px 0px 2px #2d2d2d;
        }
    }
    @media (min-width:760px) {
        > span{
            width: 500px;
            font-size: 30px;
            padding: 20px 0px;
            > p{
                padding: 0px;
                font-size: 21px;
            }
        }
    }
    @media (min-width:960px) {
        flex-direction: ${ ({ imagePosition }) => (imagePosition === 'left' ? 'row-reverse' : 'row')};
        > span{
            text-align: left;
            font-size: 36px;
            padding: 0px 30px;
        }
    }
`

export const DetailImage = styled.img`
    width: 150px;
    height: 150px;
    @media (min-width:960px) {
        width: 400px;
        height: 400px;        
    }
`

export const DetailAction = styled.div`
    width: 250px;
    margin: 0 auto;
    @media (min-width:960px) {
        margin: 0;
    }
`