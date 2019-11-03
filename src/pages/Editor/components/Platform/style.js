import styled from 'styled-components/macro'

export const PlatformContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
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
    margin: 0;
    border: 1px solid green;
`
export const PlatformTools = styled.div`
    width: 200px;
    margin: 0;
    background-color: #d7d7d7;
    padding: 15px 0px;
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    overflow: auto;
    height: 650px;
    > ul {
        padding: 0px;
        list-style: none;
        > li {
            list-style: none;
        }
    }
`