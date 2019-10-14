import styled from 'styled-components/macro'
import theme from '../../theme'

export const DetailWrapper = styled.section`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize };
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
    color: ${theme.white};
    > span{
        width: 100%;
        font-size: 30px;
        text-align: center;
        line-height: 1.5;
        text-shadow: 0px 1px 2px ${theme.black};
        > p {
            font-size: 21px;
            font-family: 'Lato', sans-serif;
            text-shadow: 0px 0px 2px #2d2d2d;
        }
    }
    @media (min-width:760px) {
        > span{
            width: 500px;
        }
    }
    @media (min-width:960px) {
        flex-direction: ${ ({ imagePosition }) => (imagePosition === 'left' ? 'row-reverse' : 'row')};
        > span{
            text-align: left;
            font-size: 36px;
        }
    }
`

export const DetailImage = styled.img`
    width: 250px;
    height: 250px;
    @media (min-width:960px) {
        width: 400px;
        height: 400px;        
    }
`

export const DetailAction = styled.div`
    width: 250px;
    height: 100px;
    background: red;
`