import React from 'react'
import PropTypes from 'prop-types'
import '../../@style/container.css'
import '../../@style/form.css'
/* Components */
import { TextField } from '@rmwc/textfield'
import { Select } from '@rmwc/select'
import Remove from '../../../common/remove'
/* Data */
import PASS from '../../@data/@pass'

const NurseForm = ({
  data,
  editForm,
  changeState,
  disabledAccount,
}) => {
  return (
    <div className="graduate-container">
      <div className="graduate-form">
        <fieldset className="graduate-form--fieldset">
          <legend>
            Datos Básicos
          </legend>

          <aside className="graduate-form--control">
            <TextField
              label="Nombre"
              value={data.first_name}
              onChange={(e) => changeState({ ...data, first_name: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => changeState({ ...data, first_name: '' })
              }}
            />
          </aside>

          <aside className="graduate-form--control">
            <TextField
              label="Apellido"
              value={data.last_name}
              onChange={(e) => changeState({ ...data, last_name: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => changeState({ ...data, last_name: '' })
              }}
            />
          </aside>

          {/* <div className="graduate-separate" /> */}

        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Seguridad
          </legend>

          <aside className="graduate-form--control">
            <TextField
              type="email"
              label="Correo Electronico"
              value={data.email}
              onChange={(e) => changeState({ ...data, email: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => changeState({ ...data, email: '' })
              }}
            />
          </aside>

          <aside className="graduate-form--control">
            <TextField
              type="password"
              label="Contraseña"
              value={data.password}
              onChange={(e) => changeState({ ...data, password: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => changeState({ ...data, password: '' })
              }}
            />
          </aside>

        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Privilegios
          </legend>

          <aside className="graduate-form--control">
            <Select
              enhanced
              label="Elija uno"
              value={data.type_user}
              onChange={(e) => changeState({ ...data, type_user: e.currentTarget.value })}
              options={
                Object.values(PASS).map(({ id, label }) => ({ label, value: id }))
              }
            />
            {/* <TextField
              label="Correo Electronico"
              value={data.email}
              onChange={(e) => changeState({ ...data, email: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => changeState({ ...data, email: '' })
              }}
            /> */}
          </aside>

        </fieldset>

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

NurseForm.propTypes = {
  data: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    type_user: PropTypes.string,
  }),
  editForm: PropTypes.bool,
  changeState: PropTypes.func,
  disabledAccount: PropTypes.func
}

NurseForm.defaultProps = {
  data: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    type_user: '',
  },
  editForm: false,
  changeState: () => { },
  disabledAccount: () => { }
}

export default NurseForm