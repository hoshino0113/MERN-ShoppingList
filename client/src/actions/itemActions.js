import { createDispatchHook } from "react-redux";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./type";
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res => 
            dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
}

export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res =>
            dispatch({
                type:DELETE_ITEM,
                payload: id
            })
        )
}

export const addItem = item => dispatch => {
    axios
        .post('/api/items', item)
        .then(res => dispatch(
            {
                type: addItem,
                payload: res.data
            }
        ))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}