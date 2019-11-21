import styled from 'styled-components'
import { Chip } from '@rmwc/chip'
import { BASE_IMAGE } from '../../../@data/@server'

export const EditContainer = styled.div`
    width: 190px;
    margin: 0 auto;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
`
export const EditWrapper = styled.div`
    padding: 10px 0px;
`
export const EditLabel = styled(Chip)`
    outline: none!important;
    margin: 9px 0px;
    background: #2196F3;
    color: #fff;
`
export const EditColor = styled.div`
    > div{
        width: 150px!important;
        margin: 0 auto;
    }
`
export const EditImageWrapper = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid #e4e4e4;
`
export const EditImagePreview = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    cursor: pointer;
    > div{
        border-radius: 20px;
        width: 100px;
        height: 100px;
        background-image: url(${BASE_IMAGE}/${({ image }) => image});
        background-size: cover;
        background-position: center;
        border: 1px solid #cfcfcf;
        transition: all 0.2s;
    }
    :hover{
        >div{
            filter: grayscale(1);
        }
        :after{
            left: 100px;
            color: #E91E63;
        }
    }
    :after{
        content: 'eliminar';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: transparent;
        width: 64px;
        height: 64px;
        top: 18px;
        left: 0px;
        transition: all 0.2s;
        z-index: 1;
    }
`
export const EditImage = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: #9E9E9E;
    color: #eaf5fa;
    line-height: 8;
    text-align: center;
    cursor: pointer;
`