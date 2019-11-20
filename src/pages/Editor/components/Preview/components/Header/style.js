import styled from 'styled-components'
import theme from '../../../../../../theme'
import { Icon } from '@rmwc/icon'

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
    border: 2px dashed #f2d31b;
    box-sizing: border-box;
    user-select: none;
    white-space: initial;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
    > span{
        width: 300px;
        font-size: 25px;
        text-align: center;
        line-height: 1.5;
        text-shadow: 0px 1px 2px ${theme.black};
    }
`
export const HeaderImage = styled.img`
    width: 100px;
    height: 100px;

`
export const IconPreview = styled(Icon)`
    font-size: 50px;
    padding: 15px;
    color: #ffffff;
    text-shadow: 1px 1px 2px #000;
`