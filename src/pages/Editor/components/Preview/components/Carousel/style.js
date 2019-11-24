import styled from 'styled-components'

export const CarrouselContainer = styled.section`
    position: relative;
    width:100%;
    height: 370px;
    background-color: #1a1a1a;
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
    background-color: #2195f3;
    margin: 10px;
    text-align: center;
    line-height: 5;
    z-index: 1;
    > i{
        font-size: 50px;
    }
`
export const CarroselImagePreview = styled.div`
    width: 370px;
    height: 370px;
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #000;
`