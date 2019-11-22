import styled from 'styled-components'
import theme from '../../theme'

export const NavContainer = styled.div`
    height: auto;
`
export const Nav = styled.nav`
    font-family: 'Lato', sans-serif;
    position: fixed;
    width: 100%;
    padding: 0px 0px;
    transition: all 0.5s;
    z-index:5;
`
export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    color: ${theme.white};
    @media (min-width:960px) {
        width: 960px;
    }
`
export const NavBrand = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    > span{
        width: 100px;
        font-size: 14px;
        padding-left: 10px;
        text-transform: uppercase;
        font-weight: bold;
    }
    @media (min-width:960px) {
        > img {
            width: 80px;
            height: 80px;
        }
        > span {
            width: 150px;
            padding-left: 15px;
        }
    }
`
export const NavMenu = styled.div`
    position: fixed;
    background: #000;
    top: 0;
    width: 100%;
    height: 100vh;
    > ul {
        display: flex;
        list-style: none;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        padding: 0;
        margin: 0;
        > li {
            display: block;
            padding: 15px;
            font-size: 25px;
            > a {
                color: #fff;
            }
        }
    }
    @media (min-width:960px) {
        position: relative;
        background: transparent;
        width: initial;
        height: initial;
        > ul{
            flex-direction: row;
            height: auto;
            > li{
                list-style: none;
                display: inline-block;
                padding: 15px;
                font-size: 16px;
            }
        }
    }
`
export const NavMobile = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    z-index: 1;
    > button {
        outline: none;
    }
    @media (min-width:960px) {
        display: none;
    }
`