import React, { Component } from 'react';
import '../@style/container.css';
import '../@style/form.css';
/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import Loading from '../../common/loading';
import Action from '../../common/action';
import NurseRead from './nurse-read';
import {
  Subtitle1
} from '@material/react-typography';

/* Interface */
import { NurseSchema } from './nurse-schema';

/* Data */
import NurseHttp from '../@data/nurse-http';
import ReadHttp from '../@data/read-http';
import { getUrl } from '../@data/get-url';

class PersonDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      data: Object.assign({}, NurseSchema),
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
    const id = this.props.match.params.id;
    let url = getUrl.back(this.props.history.location.pathname);
    let self = this;
    NurseHttp.getId(
      id,
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
  componentWillUnmount() {
    this.cancelRead();
  }
  handleSend = (e) => {
    e.preventDefault();
    let self = this;
    let id = this.state.data.id_nurse;
    let rfid = this.state.data.rfid;
    NurseHttp.enabled(id, rfid,
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

  startRead = () => {
    let self = this;
    this.startCount();
    this.interval = setInterval(() => this.startCount(), 1000);
    ReadHttp.activeRead();
    ReadHttp.readCode(0, (data) => {
      self.cancelCount();
      if (data.status) {
        let dataNew = self.state.data;
        let readInfo = self.state.readInfo;
        readInfo.load = false;
        if (data.result.enabled) {
          // disponible
          dataNew.rfid = data.result.rfid;
          self.setState({
            data: dataNew,
            readInfo
          });
        } else {
          // ya en uso
          console.log(this.props.history);
          readInfo.message = `El RFID ya esta en USO por: ${data.result.user.first_name} ${data.result.user.last_name}`;
          readInfo.linkRef = `../${data.result.user.id_nurse}`
          self.setState({
            data: dataNew,
            readInfo
          });
        }
      }
    }, (error) => {
      self.completeError(error.result);
    })
  }
  cancelRead = () => {
    this.cancelCount();
    ReadHttp.cancelRead();
  }
  startCount = () => {
    if (this.state.readInfo.seconds === 0) {
      this.cancelCount();
    } else {
      let readInfo = this.state.readInfo;
      if (this.state.readInfo.seconds === 10) {
        readInfo.load = true;
      }
      readInfo.seconds = readInfo.seconds - 1;
      this.setState({
        readInfo
      }, () => {
        console.log(this.state.readInfo.seconds)
      });
    }
  }
  cancelCount = () => {
    clearInterval(this.interval);
    let readInfo = this.state.readInfo;
    readInfo.seconds = 10;
    readInfo.enabled = false;
    readInfo.load = false;
    readInfo.message = '';
    readInfo.linkRef = '';
    this.setState({
      readInfo
    });
  }
  render() {
    return (
      <div>
        <Header
          title="Habilitar Enfermera"
          match={this.props.match}
          theme={{
            background: "#008000",
            color: "#fff"

          }}
        />

        {
          !this.state.load ?
            <form onSubmit={this.handleSend}>
              <div className="graduate-container">
                <div className="graduate-form">

                  <fieldset className="graduate-form--fieldset">
                    <legend>
                      Cuenta de:
                  </legend>
                    <aside className="graduate-form--control">
                      <Subtitle1
                        style={{
                          color: '#888787'
                        }}
                      >
                        {this.state.data.first_name} {this.state.data.last_name} - {this.state.data.cellphone}
                      </Subtitle1>
                    </aside>
                  </fieldset>

                  <NurseRead
                    {...this.state.data}
                    {...this.state.readInfo}
                    changeState={this.changeState}
                    startRead={this.startRead}
                    cancelRead={this.cancelRead}
                  />
                </div>
              </div>

              <Action
                match={this.props.match}
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

export default PersonDetail;