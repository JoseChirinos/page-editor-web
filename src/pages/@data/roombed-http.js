import axios from 'axios';
import { BASE } from './@server';

const RoomBedHttp = {
  getAll: (response, error)=>{
    axios.get(BASE+'roombed/all')
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  getId: (id,response, error)=>{
    axios.get(BASE+'roombed/'+id)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  add: (data,response, error)=>{
    axios.post(BASE+'roombed/new',data)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  update: (data,response, error)=>{
    axios.post(BASE+'roombed/update',data)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  delete: (id, response, error)=>{
    axios.post(BASE+'roombed/delete',{person_id:id})
    .then(function(r){
      response(r.data);
    })
    .catch(function(e){
      error(e);
    })
  }
};

export default RoomBedHttp;