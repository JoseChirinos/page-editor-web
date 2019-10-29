import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

/* components */
import Site from '../entries/Site'
import Admin from '../entries/Admin'

/* Data */
import { EMAIL, PASS } from '../pages/@data/@server'

/* Context */
import { UserContext } from '../context/user-context'

class RouterApp extends Component {

  constructor(props) {
    super()
    this.state = {
      auth: true,
      email: '',
      password: '',
      idUser: 'Opnel5aKBz',
      alert: {
        visible: false,
        message: 'default',
        theme: 'default'
      }
    }
  }
  componentDidMount() {
    if (this.getSession()) {
      this.setState({
        auth: true
      })
    }
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

  changeState = (data) => {
    this.setState(data)
  }

  signIn = (e) => {
    e.preventDefault()
    this.hideAlert()
    if (this.state.email === EMAIL) {
      if (this.state.password === PASS) {
        this.setState({
          auth: true
        })
        this.saveSession()
      } else {
        this.showAlert("Contraseña Incorrecta", "error")
      }
    } else {
      this.showAlert("Usuario no registrado", "error")
    }
  }
  signOut = (e) => {
    e.preventDefault()
    this.setState({
      auth: false
    })
    this.destroySession()
  }

  saveSession = () => {
    localStorage.setItem("session", JSON.stringify({ session: true }))
  }
  getSession = () => {
    return JSON.parse(localStorage.getItem("session")) || false
  }
  destroySession = () => {
    localStorage.removeItem("session")
  }

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state.idUser} >
          {
            this.state.auth ?
              < Admin />
              : <Site />
          }
        </UserContext.Provider>
      </Router>
    )
  }
}
export default RouterApp