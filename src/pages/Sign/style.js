import styled from 'styled-components/macro'

export const SignContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    background-image: url(/assets/images/bg-login-optional.jpg);
    background-size: cover;
    background-position: center;
`
export const SignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const SignForm = styled.form`
    margin: 0 auto;
    background-color: #fff;
    width: 80%;
    padding: 30px;
    border-radius: 5px;
    @media (min-width:760px) {
        width: 300px;
    }
`
export const SignSeparate = styled.div`
    height: 20px;
`
export const SignSend = styled.div`
    text-align: center;
`