import React, { Component } from 'react'
/* Styles */
import '../../@style/form.css'
/* Components */
import { Redirect } from 'react-router-dom'
import Header from '../../../common/header'
import UserForm from './Form'
import Action from '../../../common/action'
import Loading from '../../../common/loading'
import Alert from '../../../common/alert'
/* Interface */
import { UserSchema } from '../user-schema'
/* Data */
import UserHttp from '../../@data/user-http'
import { getUrl } from '../../@data/get-url'

class UserNew extends Component {
  constructor(props) {
    super()
    this.state = {
      data: Object.assign({}, UserSchema),
      load: false,
      completed: false,
      urlCompleted: '/',
      alert: {
        visible: false,
        message: 'default',
        theme: 'default'
      }
    }
  }
  handleSend = (e) => {
    e.preventDefault()
    this.setState({
      load: true
    })
    let self = this
    UserHttp.add(this.state.data,
      (data) => {
        if (data.status) {
          self.completeSend(data.result)
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
  componentDidMount() {
    let url = getUrl.back(this.props.history.location.pathname)
    this.setState({
      urlCompleted: url.path
    })
  }
  render() {
    return (
      <div>
        <Header
          title="Agregar Usuario"
          theme={{
            background: "#610dd8",
            color: "#fff"

          }}
        />
        {
          this.state.load ?
            <Loading title="Guardando Datos..." />
            :
            <form onSubmit={this.handleSend} className="app-form-container">
              <UserForm
                changeState={this.changeState}
                data={this.state.data}
              />
              <Action
                match={this.props.match}
              />
            </form>
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

export default UserNew