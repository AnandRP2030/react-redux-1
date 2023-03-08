import { combineReducers } from 'redux';
import { removeProducts } from '../Action/productAction';
import { productReducer, selectProductReducer } from './productReducer';

const reducers = combineReducers ({
    allProducts: productReducer,
    details: selectProductReducer,
    remove: removeProducts
})

export default reducers;