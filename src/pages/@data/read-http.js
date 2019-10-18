import axios from 'axios';
import { BASE } from './@server';

const ReadHttp = {
  config: {
    process: true
  },
  cancelRead: () => {
    ReadHttp.config.process = false;
  },
  activeRead: () => {
    ReadHttp.config.process = true;
  },
  readCode: (index, response, error) => {
    if (ReadHttp.config.process) {
      axios.get(BASE + 'read/now')
        .then(function (r) {
          if (r.data.status) {
            response(r.data);
          } else {
            if (index === 20) {
              response(r.data);
            } else {
              console.log('entra ' + index);
              setTimeout(() => {
                ReadHttp.readCode(index + 1, response, error)
              }, 500);
            }
          }
        })
        .catch(function (e) {
          error(e);
        })
    } else {
      response({
        status: false,
        message: 'Lectura Cancelada'
      });
    }
  }
};

export default ReadHttp;