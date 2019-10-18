import React, { Component } from 'react';
/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import Loading from '../../common/loading';
import NurseForm from './nurse-form';
import Action from '../../common/action';
import Alert from '../../common/alert';

/* Interface */
import { NurseSchema } from './nurse-schema';

/* Data */
import NurseHttp from '../@data/nurse-http';
import { getUrl } from '../@data/get-url';

class PersonDetail extends Component {
  constructor(props){
    super();
    this.state = {
      data: Object.assign({},NurseSchema),
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
  componentDidMount(){
    const id = this.props.match.params.id;
    let url = getUrl.back(this.props.history.location.pathname);
    let self = this;
    NurseHttp.getId(
      id,
      (data)=>{
        self.setState({
          urlCompleted: url.path,
          load: false,
          data: {
            passNow:'',
            passNew: '',
            ...data.result
          }
        });
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  handleSend = (e)=>{
    e.preventDefault();
    let data = this.state.data;
    this.setState({
      load: true,
      loadText: 'Guardando'
    });
    this.sendUpdate(data);
  }
  sendUpdate = (data)=>{
    let self = this;
    NurseHttp.update(data,
      (data)=>{
        if(data.status){
          self.completeSend(data);
        }else{
          self.completeError(data.message);
        }
      },
      (error)=>{
        self.completeError(error);
      })
  }

  disabledAccount = ()=>{
    let id = this.props.match.params.id;
    let self = this;
    if(window.confirm("Esta seguro que quiere deshabilitar esta cuenta?")){
      NurseHttp.disabled(id,
        (data)=>{
          if(data.status){
            self.completeSend(data);
          }else{
            self.completeError(data.message);
          }
        },
        (error)=>{
          self.completeError(error);
        });
    }
  }

  completeSend = ()=>{
    this.setState({
      completed: true
    });
  }
  completeError = (message)=>{
    this.setState({
      load: false
    });
    this.showAlert(message,'error');
  }
  showAlert = (message, theme)=>{
    this.setState({
      alert:{
        visible: true,
        message,
        theme
      }
    });
  }
  hideAlert = ()=>{
    this.setState({
      alert: false,
      message: '',
      theme: 'default'
    })
  }

  changeState = (keyObject)=>{
    let name = Object.keys(keyObject)[0];
    let data = this.state.data;
    data[name] = keyObject[name]; 
    this.setState({
      data: data
    })
  }
  showAlert = (message, theme)=>{
    this.setState({
      alert:{
        visible: true,
        message,
        theme
      }
    });
  }
  hideAlert = ()=>{
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
          title = "Detalle Enfermera"
          match = { this.props.match }
          theme = {{
            background: "#008000",
            color:"#fff"

          }}
        />

        {
          !this.state.load ?
          <form onSubmit={ this.handleSend }>
            <NurseForm
              editForm
              changeState = { this.changeState }
              disabledAccount = { this.disabledAccount }
              { ...this.state.data }
            />
            <Action
              match = { this.props.match }
            />
          </form>
          :
          <Loading title={ this.state.loadText }/>
        }
        
        {
          this.state.alert.visible ?
          <Alert
            message={ this.state.alert.message }
            theme={ this.state.alert.theme }
            hideAlert = { this.hideAlert }
          />
          :
          <span/>
        }

        {
          this.state.completed?
          <Redirect to={ this.state.urlCompleted } />
          :
          <span/>
        }
      </div>
    )
  }
}

export default PersonDetail;