import styled from 'styled-components'
import theme from '../../theme'

export const HeaderWrapper = styled.header`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize};
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
    }
    @media (min-width:760px) {
        > span{
            font-size: 40px;
            width: 500px;
        }
    }
    @media (min-width:960px) {
        /* flex-direction: row; */
        /*height: 100vh;*/
        > span{
            /* text-align: left; */
            font-size: 46px;
        }
    }
`

export const HeaderImage = styled.img`
    width: 250px;
    height: 250px;
    @media (min-width:960px) {
        width: 350px;
        height: 350px;        
    }
`