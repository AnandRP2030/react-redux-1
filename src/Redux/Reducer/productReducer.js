import { ActionTypes } from "../constants/action-type";
import { setProducts } from "../Action/productAction";
const intialState = {
  products: [],
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_PRODUCTS:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
