import styled from 'styled-components'
import { Icon } from '@rmwc/icon'

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 30px 0px;
    background-color: #000;
    color: #fff;
    border: 2px dashed #f2d31b;
    box-sizing: border-box;
    user-select: none;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const FooterLogo = styled.div`
    > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`

export const FooterInfo = styled.div`
    text-align: left;
    align-self: flex-start;
    > h3{
        font-size: 25px;
    }
    > p {
        color: #afb0b1;
        width: 150px;
    }
    > ul{
        color: #afb0b1;
        padding: 0;
        >li{
            padding-bottom: 5px;
            list-style: none;
        }
    }
`
export const IconPreview = styled(Icon)`
    font-size: 50px;
    padding: 15px;
    color: #ffffff;
    text-shadow: 1px 1px 2px #000;
`