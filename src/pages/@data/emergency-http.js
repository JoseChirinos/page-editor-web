import axios from 'axios';
import { BASE } from './@server';

const EmergencyHttp = {
  config:{
    process: true
  },
  cancelRead: ()=>{
    EmergencyHttp.config.process = false;
  },
  activeRead: ()=>{
    EmergencyHttp.config.process = true;
  },
  emergencyNow: (response, error)=>{
    if(EmergencyHttp.config.process){
      axios.get(BASE+'emergency/now/detail')
      .then( function(r){
        response(r.data);
      })
      .catch( function(e){
        error(e);
      })
    }else{
      response({ 
        status: false,
        message: 'Peticion Cancelada'
      });
    }
  }
};

export default EmergencyHttp;