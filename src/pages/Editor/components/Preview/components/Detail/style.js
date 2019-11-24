import styled from 'styled-components'
import theme from '../../../../../../theme'
import { Icon } from '@rmwc/icon'

export const DetailWrapper = styled.section`
    position: relative;
    font-family: 'Sarala', sans-serif;
    width: 100%;
    height: ${ ({ heightSize }) => heightSize};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: ${ ({ imagePosition }) => (imagePosition === 'left' ? 'row-reverse' : 'row')};
    background-color: ${ ({ bgColor }) => bgColor};
    background-image: ${ ({ background }) => `url(${background})`};
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
        text-align: left;
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
    width: 150px;
    height: 150px;
`
export const DetailAction = styled.div`
    width: 250px;
`
export const IconPreview = styled(Icon)`
    font-size: 50px;
    padding: 15px;
    color: #ffffff;
    text-shadow: 1px 1px 2px #000;
`