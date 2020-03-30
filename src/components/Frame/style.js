import styled from 'styled-components'

export const FrameContainer = styled.div`
    width: 100%;
    overflow-y: hidden;
    height: 100vh;
    > iframe{
        margin-top: 78px;
    }
    @media (min-width:960px) {
        > iframe{
            margin-top: 98px;
        }
    }
`