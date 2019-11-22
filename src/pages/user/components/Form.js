import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '../../@style/container.css'
import '../../@style/form.css'
import '@rmwc/data-table/data-table.css'
/* Components */
import { TextField } from '@rmwc/textfield'
import { Select } from '@rmwc/select'
import { Typography } from '@rmwc/typography'
import { Button } from '@rmwc/button'
import { SimpleDataTable } from '@rmwc/data-table'
import Remove from '../../../common/remove'
import {
  NavLink
} from 'react-router-dom'
/* Data */
import PASS from '../../@data/@pass'
/* Context */
import { UserContext } from '../../../context/user-context'

const UserForm = ({
  data,
  dataRecovery,
  editForm,
  changeState,
  disabledAccount,
  recoveryCount,
  hiddenRecovery,
}) => {
  const { type_user } = useContext(UserContext)

  return (
    <div className="app-container">
      <div className="app-form-wrapper">
        <fieldset className="app-form--fieldset">
          <legend>
            Datos Básicos
          </legend>

          <aside className="app-form--control">
            <TextField
              required
              type="text"
              label="Nombre"
              helpText="Escriba nombre/s"
              value={data.first_name}
              onChange={(e) => changeState({ ...data, first_name: e.currentTarget.value })}
              pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
              characterCount
              maxLength={100}
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => changeState({ ...data, first_name: '' })
              }}
            />
          </aside>

          <aside className="app-form--control">
            <TextField
              required={true}
              type="text"
              label="Apellido"
              helpText="Escriba apellido/s"
              value={data.last_name}
              onChange={(e) => changeState({ ...data, last_name: e.currentTarget.value })}
              pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
              characterCount
              maxLength={100}
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => changeState({ ...data, last_name: '' })
              }}
            />
          </aside>

        </fieldset>

        <fieldset className="app-form--fieldset">
          <legend>
            Seguridad
          </legend>

          <aside className="app-form--control">
            <TextField
              required
              disabled={editForm}
              type="email"
              label="Correo Electronico"
              helpText="Escriba email válido"
              value={data.email}
              onChange={(e) => changeState({ ...data, email: e.currentTarget.value })}
              characterCount
              maxLength={150}
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => changeState({ ...data, email: '' })
              }}
            />
          </aside>

          <aside className="app-form--control">
            {!editForm &&
              <TextField
                required
                type="password"
                label="Contraseña"
                helpText="Escriba una contraseña"
                value={data.password}
                onChange={(e) => changeState({ ...data, password: e.currentTarget.value })}
                characterCount
                maxLength={50}
                trailingIcon={{
                  icon: 'close',
                  tabIndex: 1,
                  onClick: () => changeState({ ...data, password: '' })
                }}
              />
            }
          </aside>

          {editForm && <div className="app-separate" />}

          <aside className="app-form--control">
            {editForm &&
              <div>
                <Typography>
                  Para cambiar la contraseña debe ingresar <strong>Actual Contraseña</strong>
                </Typography>
                <div className="app-separate" />
                <NavLink to={`./${data.idUser}/password`}>
                  <Button
                    outlined
                  >
                    Cambiar Contraseña
                  </Button>
                </NavLink>


              </div>
            }
          </aside>
        </fieldset>


        {
          type_user === 'R' &&
          <fieldset className="app-form--fieldset">
            <legend>
              Privilegios
            </legend>

            <aside className="app-form--control">
              <Select
                required
                helpText="Elija un permiso"
                label="Elija uno"
                value={data.type_user}
                onChange={(e) => changeState({ ...data, type_user: e.currentTarget.value })}
                options={
                  Object.values(PASS).map(({ id, label }) => ({ label, value: id }))
                }
              />
            </aside>
          </fieldset>

        }


        {type_user === 'R' && editForm && <fieldset className="app-form--fieldset">
          <legend>
            Recuperar Cuenta
          </legend>
          <aside className="app-form--control">
            {
              editForm &&
              <div>
                <Button
                  outlined
                  type="button"
                  onClick={recoveryCount}
                >
                  Recuperar
                </Button>
                <Button
                  type="button"
                  onClick={hiddenRecovery}
                  icon="visibility_off"
                />
              </div>
            }
            <div className="app-separate" />
            {
              editForm && dataRecovery.name && <SimpleDataTable
                headers={[['Name', 'Email', 'Password']]}
                data={[
                  [dataRecovery.name, dataRecovery.email, dataRecovery.password],
                ]}
              />
            }
          </aside>
        </fieldset>}

        {
          editForm &&
          <Remove
            text="(*) Si usted esta seguro que quiere deshabilitar al usuario, es bajo su responsabilidad."
            label="DESHABILITAR"
            handleEvent={disabledAccount}
          />
        }

      </div>
    </div>
  )
}

UserForm.propTypes = {
  data: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    type_user: PropTypes.string,
  }),
  dataRecovery: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  editForm: PropTypes.bool,
  changeState: PropTypes.func,
  disabledAccount: PropTypes.func,
  recoveryCount: PropTypes.func,
  hiddenRecovery: PropTypes.func,
}

UserForm.defaultProps = {
  data: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    type_user: '',
  },
  dataRecovery: {
    name: '',
    email: '',
    password: '',
  },
  editForm: false,
  changeState: () => { },
  disabledAccount: () => { },
  recoveryCount: () => { },
  hiddenRecovery: () => { }
}

export default UserForm