import axios from 'axios'
import { BASE } from './@server'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const GaleryHttp = {
    add: (data, response, error) => {
        axios.post(BASE + 'galery/add', data,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    delete: (data, response, error) => {
        axios.post(BASE + 'galery/delete', data,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
}

export default GaleryHttp