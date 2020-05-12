import {
    AUTH_LOGOUT, AUTH_SUCCESS
} from "./types";
import axios from 'axios';
import store from "../store";


// declare a response interceptor
axios.interceptors.response.use((response) => {
  // do something with the response data

  return response;
}, error => {
    if (401 === error.response.status) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        store.dispatch({type: AUTH_LOGOUT});
    }
    return Promise.reject(error);
});

export const logout = () => {

    const config = {
        headers: {
            "Authorization": "Token " + localStorage.getItem('token')
        }
    };

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return dispatch => {
        axios.post('/api/logout', {}, config)
        .then(res =>{
            dispatch({
                type: AUTH_LOGOUT
            });
            // window.location.reload();
        })
        .catch(err => {
            console.log('logout error-> ' + err)
//            dispatch(authFail(err))
        })
    }
}

export const login = (user) => {

    return dispatch => {
//        dispatch(authStart());
        axios.post('/api/login', user)
        .then(res =>{
            const token = res.data.key;
//            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
//            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token, res.data.user));
//            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(returnError(err.response.data))
        })
    }
}

export const authSuccess = (token, user) => {
    return {
        type: AUTH_SUCCESS,
        token: token,
        user: user
    }
}
