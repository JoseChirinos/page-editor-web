import styled from 'styled-components/macro'

export const PlatformContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: 'row';
    width: 100%;
    height: calc(100vh - 70px);
    margin: 2px 0px;
    background-color: #e9eaeb;
    user-select: none;
`
export const PlatformPreview = styled.div`
    width: 700px;
    height: calc(100vh - 70px);
    margin: 0;
    border: 0.5px solid #a8a9ab;
    overflow: auto;
`
export const PlatformTools = styled.div`
    width: 200px;
    margin: 0;
    background-color: #d7d7d7;
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    overflow: auto;
    height: calc(100vh - 70px);
    > ul {
        padding: 0px;
        list-style: none;
        > li {
            list-style: none;
        }
    }
`
export const PlatformActive = styled.div`
    header, section, footer {
        border: ${ ({ active }) => { return active && '5px solid #fce308!important' }};
    }
`