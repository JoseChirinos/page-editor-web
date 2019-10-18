import React, { Component } from 'react';
/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import Loading from '../../common/loading';
import PersonForm from './position-form';
import Action from '../../common/action';

/* Interface */
import { PositionSchema } from './position-schema';

/* Data */
import PositionHttp from '../@data/position-http';
import PersonHttp from '../@data/person-http';
import { getUrl } from '../@data/get-url';

class PersonDetail extends Component {
  constructor(props){
    super();
    this.state = {
      data: Object.assign({},PositionSchema),
      dataPerson: {
        first_name: 'Persona'
      },
      changePass: false,
      load: true,
      loadText: 'Cargando Información',
      completed: false,
      urlCompleted: '/'
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    let url = getUrl.back(this.props.history.location.pathname);
    let self = this;
    PositionHttp.getId(
      id,
      (data)=>{
        self.getDataPerson(data.result.person_id);
        self.setState({
          urlCompleted: url.path,
          load: false,
          data: {
            person_id: data.result.person_id || '',
            position_id: data.result.position_id || '',
            profession: data.result.profession || '',
            specialty: data.result.specialty || '',
            appointment: data.result.appointment || '',
            career_direction: data.result.career_direction || ''
          }
        });
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  getDataPerson = (person_id)=>{
    let self = this;
    PersonHttp.getId(person_id,
      (data)=>{
        self.setState({
          dataPerson: data.result
        });
      },
      (error)=>{
        console.log(error);
      })
  }
  handleSend = (e)=>{
    e.preventDefault();
    let data = this.state.data;
    this.setState({
      load: true,
      loadText: 'Guardando'
    });
    if(this.state.changePass){
      if(data.passwords === data.passNow ){
        data.pass = data.passNew;
        this.sendUpdate(data);
      }else{
        alert('Contraseña anterior no coincide, acceso Denegado');
      }
    }else{
      data.pass = data.passwords;
      this.sendUpdate(data);
    }
  }
  sendUpdate = (data)=>{
    let self = this;
    PositionHttp.update(data,
      (data)=>{
        self.completeSend(data);
      },
      (error)=>{
        self.completeError(error);
      })
  }

  completeSend = (result)=>{
    this.setState({
      completed: true
    })
  }
  completeError = ()=>{
    this.setState({
      load: false
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
  togglePass = ({ changePass })=>{
    this.setState({
      changePass
    },()=>{
      console.log('actual', this.state);
    })
  }
  render() {
    return (
      <div>
        <Header
          title = { `${this.state.dataPerson.first_name}` }
          match = { this.props.match }
          theme = {{
            background: "#7c20ff",
            color:"#fff"

          }}
        />

        {
          !this.state.load ?
          <form onSubmit={ this.handleSend }>
            <PersonForm
              editForm
              changeState = { this.changeState }
              changePass = { this.state.changePass }
              togglePass = { this.togglePass }
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