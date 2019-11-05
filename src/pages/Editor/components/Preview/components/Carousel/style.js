import styled from 'styled-components/macro'

export const CarrouselContainer = styled.div`
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