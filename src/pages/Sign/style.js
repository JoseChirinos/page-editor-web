import styled from 'styled-components'

export const SignContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    background-image: url(/assets/images/bg-login-oficial.jpg);
    background-size: cover;
    background-position: center;
    ::after{
        content: '';
        background-image: url(/assets/images/bg-login-oficial.jpg);
        background-size: cover;
        background-position: center;
        opacity: 0.9;
        filter: blur(20px);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`
export const SignWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 2;
`
export const SignForm = styled.form`
    margin: 0 auto;
    width: 80%;
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    @media (min-width:760px) {
        width: 300px;
        padding: 30px 40px;
    }
`
export const SignTitle = styled.div`
    font-family: 'Sarala', sans-serif;
    text-align: center;
    color: #fff;
`
export const SignSeparate = styled.div`
    height: 20px;
`
export const SignSend = styled.div`
    text-align: center;
    padding: 15px 0px;
    > span{
        color: #fff;
        text-shadow: 1px 1px 1px #000;
    }
`