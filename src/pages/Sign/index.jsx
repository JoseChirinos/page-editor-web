import React from 'react'
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

const SignIn = ({
    signIn,
    changeState,
    hideAlert,
    data
}) => {
    return (
        <SignContainer>
            <SignWrapper>
                <SignForm onSubmit={signIn}>
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
                        onChange={(e) => changeState({ ...data, email: e.currentTarget.value })}
                        maxLength={150}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => changeState({ ...data, email: '' })
                        }}
                    />
                    <SignSeparate />
                    <TextField
                        required
                        type="password"
                        label="Contraseña"
                        value={data.password}
                        onChange={(e) => changeState({ ...data, password: e.currentTarget.value })}
                        maxLength={50}
                        trailingIcon={{
                          icon: 'close',
                          tabIndex: 1,
                          onClick: () => changeState({ ...data, password: '' })
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
                data.alert.visible ?
                <Alert
                    max
                    message={data.alert.message}
                    theme={data.alert.theme}
                    hideAlert={hideAlert}
                />
                :
                <span />
            }
        </SignContainer>
    )
}

export default SignIn
