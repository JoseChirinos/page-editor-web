import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

/* components */
import Site from '../entries/Site'
import Admin from '../entries/Admin'

/* Data */
import UserHttp from '../pages/@data/user-http'

/* Context */
import { UserContext } from '../context/user-context'
import Loading from '../common/loading'

class RouterApp extends Component {

  constructor(props) {
    super()
    this.state = {
      auth: false,
      userInfo: {},
      load: true
    }
  }
  componentDidMount() {
    const offline = UserHttp.checkSessionOff()
    if (offline) {
      this.setState({
        userInfo: offline,
        auth: true,
        load: false
      })
    } else {
      this.setState({
        load: false
      })
    }
  }

  signIn = (email, password, response) => {
    const offline = UserHttp.checkSessionOff()
    if (offline) {
      this.setState({
        userInfo: offline
      })
    } else {
      UserHttp.signIn({ email, password },
        (data) => {
          if (data.status) {
            const userInfo = data.result
            UserHttp.createSession(userInfo)
            this.setState({
              userInfo,
              auth: true
            })
          } else {
            response({
              message: data.message,
              error: true,
            })
          }
        },
        (error) => {
          response({
            message: error.message,
            error: true,
          })
        }
      )
    }
  }
  signUp = (first_name, last_name, email, password, response) => {
    const type_user = 'P'
    UserHttp.add({ first_name, last_name, email, password, type_user },
      (data) => {
        if (data.status) {
          const userInfo = {
            idUser: data.result.idInsert,
            first_name,
            last_name,
            email,
            type_user
          }
          UserHttp.createSession(userInfo)
          this.setState({
            userInfo,
            auth: true
          })
        } else {
          response({
            message: data.message,
            error: true,
          })
        }
      },
      (error) => {
        response({
          message: error.message,
          error: true,
        })
      }
    )
  }

  signOut = (e) => {
    e.preventDefault()
    this.setState({
      userInfo: {},
      auth: false
    })
    UserHttp.destroySession()
  }

  render() {
    return (
      <main>
        {this.state.load ?
          <Loading />
          :
          <Router>
            <UserContext.Provider value={this.state.userInfo} >
              {
                this.state.auth ?
                  <Admin signOut={this.signOut} />
                  : <Site
                    signOut={this.signOut}
                    signIn={this.signIn}
                    signUp={this.signUp}
                  />
              }
            </UserContext.Provider>
          </Router>
        }
      </main>
    )
  }
}
export default RouterApp