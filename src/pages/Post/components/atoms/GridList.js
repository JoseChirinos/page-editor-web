import styled from 'styled-components'

export const GridList = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
`