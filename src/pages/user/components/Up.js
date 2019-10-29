import React, { Component } from 'react';
/* Styles */
import '../../@style/container.css';
import '../../@style/form.css';
/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../../common/header';
import Loading from '../../../common/loading';
import Action from '../../../common/action';
import {
  Typography
} from '@rmwc/typography';

/* Interface */
import { UserSchema } from '../user-schema';

/* Data */
import UserHttp from '../../@data/user-http';
import { getUrl } from '../../@data/get-url';

class UserUp extends Component {
  constructor(props) {
    super();
    this.state = {
      data: Object.assign({}, UserSchema),
      changePass: false,
      load: true,
      loadText: 'Cargando Información',
      completed: false,
      urlCompleted: '/',
      readInfo: {
        message: '',
        linkRef: '',
        seconds: 10,
        enabled: false,
        load: false
      }
    }
  }
  componentDidMount() {
    const idUser = this.props.match.params.id;
    let url = getUrl.back(this.props.history.location.pathname);
    let self = this;
    UserHttp.getId(
      idUser,
      (data) => {
        self.setState({
          urlCompleted: url.path,
          load: false,
          data: {
            ...data.result
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleSend = (e) => {
    e.preventDefault();
    let self = this;
    let id = this.state.data.idUser;
    UserHttp.enabled(id,
      (data) => {
        self.completeSend(data);
      },
      (error) => {
        self.completeError(error);
      })
  }

  completeSend = (result) => {
    //console.log(result);
    this.setState({
      completed: true
    })
  }
  completeError = () => {
    this.setState({
      load: false
    })
  }

  changeState = (keyObject) => {
    let name = Object.keys(keyObject)[0];
    let data = this.state.data;
    data[name] = keyObject[name];
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <Header
          title="Habilitar Usuario"
          theme={{
            background: "#610dd8",
            color: "#fff"

          }}
        />

        {
          !this.state.load ?
            <form onSubmit={this.handleSend} className="app-form-container">
              <div className="app-container">
                <div className="app-form">

                  <fieldset className="app-form--fieldset">
                    <legend>
                      Cuenta de:
                  </legend>
                    <aside className="app-form--control">
                      <Typography
                        style={{
                          color: '#888787'
                        }}
                      >
                        {this.state.data.first_name} {this.state.data.last_name} - {this.state.data.email}
                      </Typography>
                    </aside>
                  </fieldset>
                </div>
              </div>

              <Action
                match={this.props.match}
                confirmLabel="Habilitar"
              />
            </form>
            :
            <Loading title={this.state.loadText} />
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

export default UserUp;