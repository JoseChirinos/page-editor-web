import React, { useState } from 'react'
import {
    SignContainer,
    SignWrapper,
    SignForm,
    SignTitle,
    SignSeparate,
    SignSend
} from './style'

import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import Alert from '../../common/alert'
/*
{
    data,
    signIn,
    changeState,
    hideAlert,
}
*/
const SignIn = (props) => {
    const [data, setData] = useState({
        email:'',
        password:''
    })
    const [alert, setAlert] = useState({
        visible: false,
        message: '',
        theme: 'default'
    })

    const signInNow = (e)=>{
        e.preventDefault()
        props.signIn(data.email, data.password, (result)=>{
            setAlert({
                visible: true,
                message: result.message,
                theme: `${result.error? 'error':'success'}`
            })
        })
    }
    const hideAlert = ()=>{
        setAlert({...alert, visible: false})
    }
    return (
        <SignContainer>
            <SignWrapper>
                <SignForm onSubmit={signInNow}>
                    <SignTitle>
                        <h1>
                            Login
                        </h1>
                    </SignTitle>

                    <SignSeparate />
                    <TextField
                        required
                        type="email"
                        label="Correo Electronico"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
                        maxLength={150}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => setData({ ...data, email: '' })
                        }}
                    />
                    <SignSeparate />
                    <TextField
                        required
                        type="password"
                        label="Contraseña"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.currentTarget.value })}
                        maxLength={50}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => setData({ ...data, password: '' })
                        }}
                    />
                    <SignSeparate />
                    <SignSend>
                        <Button raised>Ingresar</Button>
                    </SignSend>
                    <SignSend>
                        <Typography use="overline">
                            ¿No tienes una cuenta?
                        </Typography>
                        <Button type="button" raised style={{backgroundColor:'rgba(33, 150, 243, 0.39)'}}>Registrate</Button>
                    </SignSend>
                </SignForm>
            </SignWrapper>
            {
                alert.visible ?
                <Alert
                    max
                    message={alert.message}
                    theme={alert.theme}
                    hideAlert={hideAlert}
                />
                :
                <span />
            }
        </SignContainer>
    )
}

export default SignIn
