import React from 'react'
// import PropTypes from 'prop-types'
import { 
    ContactContainer,
    ContactTitle,
    ContactForm,
    ContactSeparate,
    ContactSend,
} from './style'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button';

const Contact = (props) => {
    return (
        <ContactContainer>
            <ContactTitle>
                <h1>
                    Envianos un mensaje
                    <small>
                        Te atenderemos lo más antes posible...
                    </small>
                </h1>
            </ContactTitle>
            <ContactForm onSubmit={ e=> e.preventDefault() }>
                <TextField
                    type='text'
                    outlined
                    label="Nombre"
                    style={{width:'100%'}}
                />
                <ContactSeparate />
                <TextField
                    type='email'
                    outlined
                    label="Correo Electronico"
                    style={{width:'100%'}}
                />
                <ContactSeparate />
                <TextField
                    type='tel'
                    outlined
                    label="Celular"
                    style={{width:'100%'}}
                />
                <ContactSeparate />
                <TextField
                    textarea
                    outlined
                    fullwidth
                    label="Mensaje"
                    rows={8}
                    maxLength={250}
                    characterCount
                    helpText={{
                        persistent: true,
                        validationMsg: true,
                        children: 'Es necesario su mensaje...'
                    }}
                />
                <ContactSend>
                    <Button raised>Enviar</Button>
                </ContactSend>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact
