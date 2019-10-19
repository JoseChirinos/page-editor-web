import axios from 'axios';
import { BASE } from './@server';

const UserHttp = {
    getAll: (response, error) => {
        axios.get(BASE + 'user/all')
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    getAllDisabled: (response, error) => {
        axios.get(BASE + 'user/all/disabled')
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    getId: (idUser, response, error) => {
        axios.get(BASE + 'user/' + idUser)
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    add: (data, response, error) => {
        axios.post(BASE + 'user/add', data)
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    update: (data, response, error) => {
        axios.post(BASE + 'user/update', data)
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    disabled: (idUser, response, error) => {
        axios.post(BASE + 'user/disabled', { idUser })
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    },
    enabled: (idUser, rfid, response, error) => {
        axios.post(BASE + 'user/enabled', { idUser })
            .then(function (r) {
                response(r.data);
            })
            .catch(function (e) {
                error(e);
            })
    }
};

export default UserHttp;