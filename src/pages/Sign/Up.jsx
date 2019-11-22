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
import {
    NavLink
} from 'react-router-dom'

const SignUp = (props) => {
    const [data, setData] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:''
    })
    const [alert, setAlert] = useState({
        visible: false,
        message: '',
        theme: 'default'
    })

    const signUpNow = (e)=>{
        e.preventDefault()
        props.signUp(data.first_name,data.last_name,data.email, data.password, (result)=>{
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
                <SignForm onSubmit={signUpNow}>
                    <SignTitle>
                        <h1>
                            Registro
                        </h1>
                    </SignTitle>

                    <SignSeparate />
                    <TextField
                        required
                        type="text"
                        label="Nombre"
                        value={data.first_name}
                        onChange={(e) => setData({ ...data, first_name: e.currentTarget.value })}
                        maxLength={150}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => setData({ ...data, first_name: '' })
                        }}
                    />
                    <SignSeparate />
                    <TextField
                        required
                        type="textl"
                        label="Apellido"
                        value={data.last_name}
                        onChange={(e) => setData({ ...data, last_name: e.currentTarget.value })}
                        maxLength={150}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => setData({ ...data, last_name: '' })
                        }}
                    />
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
                        <Button raised>Registrar</Button>
                    </SignSend>
                    <SignSend>
                        <Typography use="overline">
                            ¿Tienes una cuenta?
                        </Typography>
                        <NavLink to='/login'>
                            <Button type="button" raised style={{backgroundColor:'rgba(33, 150, 243, 0.39)'}}>Iniciar Sesión</Button>
                        </NavLink>
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

export default SignUp
