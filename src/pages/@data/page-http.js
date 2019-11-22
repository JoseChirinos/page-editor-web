import axios from 'axios'
import { BASE } from './@server'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const PageHttp = {

    getNow: (response, error) => {
        axios.get(BASE + 'page/now',
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    save: (data, response, error) => {
        axios.post(BASE + 'page/save', data,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    cancel: () => {
        source.cancel('se cancelo el request')
    }
}

export default PageHttp