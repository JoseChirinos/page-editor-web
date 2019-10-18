import axios from 'axios';
import { BASE } from './@server';

const DemandHttp = {
  getAll: (response, error)=>{
    axios.get(BASE+'demand/all')
    .then(function (r) {
      response(r.data);
    })
    .catch(function (e) {
      error(e);
    })
  }
};

export default DemandHttp;