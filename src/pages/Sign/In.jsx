import React from 'react'
import {
    SignContainer,
    SignWrapper,
    SignForm,
    SignSeparate,
    SignSend
} from './style'

import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button';

const SignIn = (props) => {
    return (
        <SignContainer>
            <SignWrapper>
                <SignForm>
                    <TextField
                        type='text'
                        outlined
                        label="Correo Electronico"
                        style={{width:'100%'}}
                    />
                    <SignSeparate />
                    <TextField
                        type='password'
                        outlined
                        label="Contraseña"
                        style={{width:'100%'}}
                    />
                    <SignSeparate />
                    <SignSend>
                        <Button raised>Ingresar</Button>
                    </SignSend>
                </SignForm>
            </SignWrapper>
        </SignContainer>
    )
}

export default SignIn
