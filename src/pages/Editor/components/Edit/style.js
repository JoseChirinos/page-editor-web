import styled from 'styled-components'
import { Chip } from '@rmwc/chip'

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