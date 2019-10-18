import React, { Component } from 'react';

/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import NurseForm from './nurse-form';
import Action from '../../common/action';
import Loading from '../../common/loading';
import Alert from '../../common/alert';
/* Interface */
import { NurseSchema } from './nurse-schema';

/* Data */
import NurseHttp from '../@data/nurse-http';
import ReadHttp from '../@data/read-http';
import { getUrl } from '../@data/get-url';

class NurseNew extends Component {
  constructor(props) {
    super();
    this.state = {
      data: Object.assign({}, NurseSchema),
      load: false,
      completed: false,
      urlCompleted: '/',
      alert: {
        visible: false,
        message: 'default',
        theme: 'default'
      },
      readInfo: {
        message: '',
        linkRef: '',
        seconds: 10,
        enabled: false,
        load: false
      }
    }
  }
  handleSend = (e) => {
    e.preventDefault();
    this.setState({
      load: true
    });
    let self = this;
    //console.log(this.state.data);
    NurseHttp.add(this.state.data,
      (data) => {
        if (data.status) {
          self.completeSend(data.result);
        } else {
          self.completeError(data.message);
        }
      },
      (error) => {
        self.completeError(error);
      });
  }
  completeSend = () => {
    this.setState({
      completed: true
    })
  }
  completeError = (message) => {
    this.setState({
      load: false
    });
    this.showAlert(message, 'error');
  }
  showAlert = (message, theme) => {
    this.setState({
      alert: {
        visible: true,
        message,
        theme
      }
    });
  }
  hideAlert = () => {
    this.setState({
      alert: false,
      message: '',
      theme: 'default'
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
  componentDidMount() {
    let url = getUrl.back(this.props.history.location.pathname);
    this.setState({
      urlCompleted: url.path
    });
  }
  componentWillUnmount() {
    this.cancelRead();
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
          readInfo.message = `El RFID ya esta en USO por: ${data.result.user.first_name} ${data.result.user.last_name}`;
          readInfo.linkRef = `./${data.result.user.id_nurse}`
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
          title="Añadir Enfermera"
          match={this.props.match}
          history={this.props.history}
          theme={{
            background: "#610dd8",
            color: "#fff"

          }}
        />
        {
          this.state.load ?
            <Loading title="Guardando Datos..." />
            :
            <form onSubmit={this.handleSend}>
              <NurseForm
                changeState={this.changeState}
                {...this.state.data}
                readInfo={this.state.readInfo}
                startRead={this.startRead}
                cancelRead={this.cancelRead}
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

export default NurseNew;