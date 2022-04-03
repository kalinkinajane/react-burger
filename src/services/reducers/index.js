import { combineReducers } from 'redux';
import { ingredientsReducer, orderDetailReducer } from './ingredients';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orderDetail: orderDetailReducer,
})