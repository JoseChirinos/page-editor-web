import axios from 'axios';
import { BASE } from './@server';

const NurseHttp = {
  getAll: (response, error)=>{
    axios.get(BASE+'nurse/all')
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  getAllDisabled: (response, error)=>{
    axios.get(BASE+'nurse/all/disabled')
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  getId: (id,response, error)=>{
    axios.get(BASE+'nurse/'+id)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  add: (data,response, error)=>{
    axios.post(BASE+'nurse/add',data)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  update: (data,response, error)=>{
    axios.post(BASE+'nurse/update',data)
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  },
  disabled: (id, response, error)=>{
    axios.post(BASE+'nurse/disabled',{id_nurse:id})
    .then(function(r){
      response(r.data);
    })
    .catch(function(e){
      error(e);
    })
  },
  enabled: (id, rfid, response, error)=>{
    axios.post(BASE+'nurse/enabled',{
      id_nurse:id,
      rfid
    })
    .then(function(r){
      response(r.data);
    })
    .catch(function(e){
      error(e);
    })
  }
};

export default NurseHttp;