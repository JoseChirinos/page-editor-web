import styled from 'styled-components'
import theme from '../../../../../../theme'

export const HeaderWrapper = styled.header`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${ ({ background }) => `url(${background})`};
    background-color: ${theme.black};
    background-size: cover;
    color: ${theme.white};
    > span{
        width: 100%;
        font-size: 25px;
        text-align: center;
        line-height: 1.5;
        text-shadow: 0px 1px 2px ${theme.black};
    }
`

export const HeaderImage = styled.img`
    width: 75px;
    height: 75px;

`