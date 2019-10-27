import axios from 'axios'
import { BASE } from './@server'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const UserHttp = {

    getAll: (response, error) => {
        axios.get(BASE + 'post/all',
            { cancelToken: source.token }
        ).then(function (r) {
            response(r.data)
        }).catch(function (e) {
            error(e)
        })
    },
    // getAllDisabled: (response, error) => {
    //     axios.get(BASE + 'user/all/disabled',
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     })
    //         .catch(function (e) {
    //             error(e)
    //         })
    // },
    // getId: (idUser, response, error) => {
    //     axios.get(BASE + 'user/' + idUser,
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     })
    //         .catch(function (e) {
    //             error(e)
    //         })
    // },
    // add: (data, response, error) => {
    //     axios.post(BASE + 'user/add', data,
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    // update: (data, response, error) => {
    //     axios.post(BASE + 'user/update', data,
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    // disabled: (idUser, response, error) => {
    //     axios.post(BASE + 'user/disabled', { idUser },
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    // enabled: (idUser, response, error) => {
    //     axios.post(BASE + 'user/enabled', { idUser },
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    // changePassword: (data, response, error) => {
    //     axios.post(BASE + 'user/change/password', data,
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    // recovery: (data, response, error) => {
    //     axios.post(BASE + 'user/check/force', data,
    //         { cancelToken: source.token }
    //     ).then(function (r) {
    //         response(r.data)
    //     }).catch(function (e) {
    //         error(e)
    //     })
    // },
    cancel: () => {
        source.cancel('se cancelo el request')
    }
}

export default UserHttp