import React, { Component } from 'react'
/* Styles */
import '../../@style/form.css'
/* Components */
import { Redirect } from 'react-router-dom'
import Header from '../../../common/header'
import Loading from '../../../common/loading'
import UserForm from './Form'
import Action from '../../../common/action'
import Alert from '../../../common/alert'

/* Interface */
import { UserSchema, UserRecoverySchema } from '../user-schema'

/* Data */
import UserHttp from '../../@data/user-http'
import { getUrl } from '../../@data/get-url'

class UserDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      data: Object.assign({}, UserSchema),
      dataRecovery: Object.assign({}, UserRecoverySchema),
      changePass: false,
      load: true,
      loadText: 'Cargando Información',
      completed: false,
      urlCompleted: '/',
      alert: {
        visible: false,
        message: 'default',
        theme: 'default'
      }
    }
  }
  componentDidMount() {
    const idUser = this.props.match.params.id
    let url = getUrl.back(this.props.history.location.pathname)
    let self = this
    UserHttp.getId(
      idUser,
      (data) => {
        self.setState({
          urlCompleted: url.path,
          load: false,
          data: {
            passNow: '',
            passNew: '',
            ...data.result
          }
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }
  handleSend = (e) => {
    e.preventDefault()
    let data = this.state.data
    this.setState({
      load: true,
      loadText: 'Guardando'
    })
    this.sendUpdate(data)
  }
  sendUpdate = (data) => {
    let self = this
    UserHttp.update(data,
      (data) => {
        if (data.status) {
          self.completeSend(data)
        } else {
          self.completeError(data.message)
        }
      },
      (error) => {
        self.completeError(error)
      })
  }

  disabledAccount = () => {
    let idUser = this.props.match.params.id
    let self = this
    if (window.confirm("Esta seguro que quiere deshabilitar esta cuenta?")) {
      UserHttp.disabled(idUser,
        (data) => {
          if (data.status) {
            self.completeSend(data)
          } else {
            self.completeError(data.message)
          }
        },
        (error) => {
          self.completeError(error)
        })
    }
  }

  hiddenRecovery = () => {
    this.setState({ ...this.state, dataRecovery: Object.assign({}, UserRecoverySchema) })
  }
  recoveryCount = () => {
    let idUser = this.props.match.params.id
    let self = this
    UserHttp.recovery({ idUser },
      (data) => {
        if (data.status) {
          self.setState({ ...self.state, dataRecovery: data.result })
        } else {
          self.completeError(data.message)
        }
      },
      (error) => {
        self.completeError(error)
      })
  }

  completeSend = () => {
    this.setState({
      completed: true
    })
  }
  completeError = (message) => {
    this.setState({
      load: false
    })
    this.showAlert(message, 'error')
  }
  showAlert = (message, theme) => {
    this.setState({
      alert: {
        visible: true,
        message,
        theme
      }
    })
  }
  hideAlert = () => {
    this.setState({
      alert: false,
      message: '',
      theme: 'default'
    })
  }

  changeState = (newData) => {
    this.setState({
      data: newData
    })
  }
  showAlert = (message, theme) => {
    this.setState({
      alert: {
        visible: true,
        message,
        theme
      }
    })
  }
  hideAlert = () => {
    this.setState({
      alert: false,
      message: '',
      theme: 'default'
    })
  }
  render() {
    return (
      <div>
        <Header
          title="Detalle Usuario"
          theme={{
            background: "#610dd8",
            color: "#fff"

          }}
        />

        {
          !this.state.load ?
            <form onSubmit={this.handleSend} className="app-form-container">
              <UserForm
                editForm
                changeState={this.changeState}
                disabledAccount={this.disabledAccount}
                recoveryCount={this.recoveryCount}
                hiddenRecovery={this.hiddenRecovery}
                data={this.state.data}
                dataRecovery={this.state.dataRecovery}
              />
              <Action
                match={this.props.match}
              />
            </form>
            :
            <Loading title={this.state.loadText} />
        }

        {
          this.state.alert.visible ?
            <Alert
              message={this.state.alert.message}
              theme={this.state.alert.theme}
              hideAlert={this.hideAlert}
            />
            :
            <span />
        }

        {
          this.state.completed ?
            <Redirect to={this.state.urlCompleted} />
            :
            <span />
        }
      </div>
    )
  }
}

export default UserDetail