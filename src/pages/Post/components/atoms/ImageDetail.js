import styled from 'styled-components'

export const ImageDetail = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${ ({ url }) => url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`