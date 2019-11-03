import styled from 'styled-components/macro'
import theme from '../../../../../../theme'

export const DetailWrapper = styled.section`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${ ({ bgColor }) => bgColor};
    background-image: ${ ({ background }) => `url(${background})`};
    background-size: cover;
    color: ${theme.white};
    > span{
        width: 100%;
        font-size: 25px;
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
`

export const DetailImage = styled.img`
    width: 75px;
    height: 75px;
`

export const DetailAction = styled.div`
    width: 250px;
    margin: 0 auto;
`