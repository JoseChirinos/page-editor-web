import React from 'react'
import './login.css'

/* Components */
import { Button } from '@rmwc/button'
import TextField, { HelperText, Input } from '@material/react-text-field'
import { Icon } from '@rmwc/icon'
import MaterialIcon from '@material/react-material-icon'
import Alert from '../../common/alert'

const Login = (props) => {
  let {
    signIn,
    changeState,
    hideAlert,
    data
  } = props
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={signIn}>
        <div className="login-form-title">
          <h3>
            Sistema de Emergencias
              <small>Caja Nacional de Salud</small>
          </h3>
        </div>
        <div className="login-form-logo">
          <MaterialIcon role="button" icon="lock" />
        </div>
        <TextField
          label='Usuario'
          helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => changeState({ user: '' })}
          trailingIcon={<MaterialIcon role="button" icon="close " />}
        ><Input
            id="user"
            value={data.user}
            onChange={(e) => changeState({ user: e.currentTarget.value })} />
        </TextField>

        <TextField
          label='Contraseña'
          helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => changeState({ password: '' })}
          trailingIcon={<MaterialIcon role="button" icon="close" />}
        ><Input
            id="password"
            type='password'
            value={data.password}
            onChange={(e) => changeState({ password: e.currentTarget.value })} />
        </TextField>
        <Button
          raised
          className="login-form-btn"
        >
          Ingresar
          </Button>
      </form>
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
    </div>
  )
}
export default Login