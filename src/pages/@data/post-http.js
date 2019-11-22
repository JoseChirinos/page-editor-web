import axios from 'axios'
import { BASE } from './@server'

const token = {
    cancelToken: null,
    source: null,
    init: () => {
        token.cancelToken = axios.CancelToken
        token.source = token.cancelToken.source()
    },
    destroy: () => {
        token.cancelToken = null
        token.source = null
    },
    cancel: (message) => {
        if (token.source) {
            token.source.cancel(message)
            token.destroy()
        }
    }
}

const UserHttp = {
    getFirst: (response, error) => {
        token.init()
        axios.get(BASE + 'post/first',
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    getAll: (response, error) => {
        token.init()
        axios.get(BASE + 'post/all',
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    getAllUser: (idUser, response, error) => {
        token.init()
        axios.get(BASE + 'post/all/' + idUser,
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    getId: (idPost, response, error) => {
        token.init()
        axios.get(BASE + 'post/' + idPost,
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        })
            .catch(function (e) {
                error(e)
                token.destroy()
            })
    },
    add: (data, response, error) => {
        token.init()
        axios.post(BASE + 'post/add', data,
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    update: (data, response, error) => {
        token.init()
        axios.post(BASE + 'post/update', data,
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    delete: (data, response, error) => {
        token.init()
        axios.post(BASE + 'post/delete', data,
            { cancelToken: token.source.token }
        ).then(function (r) {
            response(r.data)
            token.destroy()
        }).catch(function (e) {
            error(e)
            token.destroy()
        })
    },
    cancel: () => {
        token.cancel('se cancelo el request')
    }
}

export default UserHttp