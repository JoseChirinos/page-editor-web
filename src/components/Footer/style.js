import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 50px 0px;
    background-color: #000;
    color: #fff;
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width:760px) {
        flex-direction: row;
        align-items: flex-start;
    }
`
export const FooterLogo = styled.div`
    > img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
`

export const FooterInfo = styled.div`
    text-align: center;
    > p {
        color: #afb0b1;
        width: 100%;
    }
    > ul{
        color: #afb0b1;
        padding: 0;
        >li{
            padding-bottom: 5px;
            list-style: none;
        }
    }
    @media (min-width:760px) {
        text-align: left;
        p{
            width: 400px;
        }
    }
`