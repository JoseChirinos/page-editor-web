import axios from 'axios'
import { BASE } from './@server'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const UserHttp = {

    getFirst: (response, error) => {
        axios.get(BASE + 'post/first',
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    getAll: (response, error) => {
        axios.get(BASE + 'post/all',
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    getAllUser: (idUser, response, error) => {
        axios.get(BASE + 'post/all/' + idUser,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    getId: (idPost, response, error) => {
        axios.get(BASE + 'post/' + idPost,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        })
            .catch(function (e) {
                error(e)
            })
    },
    add: (data, response, error) => {
        axios.post(BASE + 'post/add', data,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    update: (data, response, error) => {
        axios.post(BASE + 'post/update', data,
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    delete: (data, response, error) => {
        axios.post(BASE + 'post/delete', data,
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

export default UserHttp