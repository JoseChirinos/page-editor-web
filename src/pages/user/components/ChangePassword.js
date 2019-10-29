import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../@style/container.css'
import '../../@style/form.css'
/* Components */
import { Redirect } from 'react-router-dom'
import Header from '../../../common/header'
import Action from '../../../common/action'
import Alert from '../../../common/alert'

import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
/* Data */
import UserHttp from '../../@data/user-http'
import { getUrl } from '../../@data/get-url'

const UserChangePassword = ({
    match,
    history
}) => {
    const [urlBack, setUrlBack] = useState('/')
    const [showPass, setShowPass] = useState(false)
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        theme: 'default',
    })
    const [completed, setCompleted] = useState(false)

    const [data, setData] = useState({ password: '', new_password: '' })
    const [idUser, setIdUser] = useState(null)

    const savePassword = (e) => {
        e.preventDefault();
        UserHttp.changePassword(
            { ...data, idUser },
            (data) => {
                if (data.status) {
                    setCompleted(true)
                } else {
                    setAlert({ show: true, message: data.message, theme: 'error' })
                }
            },
            (error) => {
                setAlert({ show: true, message: data.message, theme: 'error' })
            })
    }

    const hideAlert = () => {
        setAlert({ ...alert, show: false, theme: 'default' })
    }

    useEffect(() => {
        const url = getUrl.back(history.location.pathname)
        const idUser = match.params.id
        setUrlBack(url.path)
        setIdUser(idUser)
    }, [setIdUser, setUrlBack, history, match])

    return (
        <div>
            <Header
                title="Cambiar Contraseña"
                theme={{
                    background: "#610dd8",
                    color: "#fff"

                }}
            />
            <form onSubmit={savePassword} className="app-form-container">
                <div className="app-form-recovery">
                    <fieldset className="app-form--fieldset">
                        <legend>
                            Contraseña Actual
                        </legend>
                        <aside className="app-form--control">
                            <TextField
                                required
                                type={showPass ? 'text' : 'password'}
                                label="Contraseña Actual"
                                helpText="Escriba la contraseña actual"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.currentTarget.value })}
                                characterCount
                                maxLength={50}
                                trailingIcon={{
                                    icon: 'close',
                                    tabIndex: 1,
                                    onClick: () => setData({ ...data, password: '' })
                                }}
                            />
                        </aside>

                    </fieldset>

                    <fieldset className="app-form--fieldset">
                        <legend>
                            Contraseña Nueva
                        </legend>

                        <aside className="app-form--control">
                            <TextField
                                required
                                type={showPass ? 'text' : 'password'}
                                label="Contraseña Nueva"
                                helpText="Escriba la contraseña nueva"
                                value={data.new_password}
                                onChange={(e) => setData({ ...data, new_password: e.currentTarget.value })}
                                characterCount
                                maxLength={50}
                                trailingIcon={{
                                    icon: 'close',
                                    tabIndex: 1,
                                    onClick: () => setData({ ...data, new_password: '' })
                                }}
                            />
                        </aside>

                        <div className="app-separate" />

                        <aside className="app-form--control">
                            <Button
                                outlined
                                type="button"
                                icon={showPass ? 'visibility_off' : 'visibility'}
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? 'Ocultar' : 'Ver Contraseña'}
                            </Button>
                        </aside>
                    </fieldset>

                </div>
                <Action
                    match={match}
                    confirmLabel="Cambiar"
                />
            </form>

            {
                alert.show ?
                    <Alert
                        message={alert.message}
                        theme={alert.theme}
                        hideAlert={hideAlert}
                    />
                    :
                    <span />
            }

            {
                completed ?
                    <Redirect to={urlBack} />
                    :
                    <span />
            }

        </div>
    )
}

UserChangePassword.propTypes = {
    match: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired
}

export default UserChangePassword