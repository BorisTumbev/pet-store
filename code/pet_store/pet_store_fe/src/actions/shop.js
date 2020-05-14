import {
GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART
} from "./types";
import axios from 'axios';


export const getProducts = () => {

    return dispatch => {
        axios.get('/api/products')
        .then(res =>{
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getProduct = (id) => {

    return dispatch => {
        axios.get(`/api/products/${id}`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const addToCart = (product) => {

    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    }
}
