import { ActionTypes } from "../constants/action-type"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProducts = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCTS,
        payload: product
    }
}

export const removeProducts = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCTS
    }
}