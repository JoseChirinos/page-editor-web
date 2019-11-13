import styled from 'styled-components/macro'

export const CarrouselContainer = styled.section`
    width:100%;
    height: 370px;
    background-color: rgb(39, 49, 78);
    border: 2px dashed #00BCD4;
    box-sizing: border-box;
    user-select: none;
    overflow-y: auto;
    overflow-x: none;
    white-space: nowrap;
    cursor: grab;
    :active{
        cursor: grabbing;
    }
`

export const CarrouselContainerInfo = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 2;
    background-color: #2195f3;
    margin: 10px;
    text-align: center;
    line-height: 5;
    > i{
        font-size: 50px;
    }
`