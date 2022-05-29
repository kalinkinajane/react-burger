import { combineReducers } from "redux";
import { ingredientDetailReducer } from "./details";
import { ingredientsConstructorReduser } from "./ingredients";
import { itemsBurgerReducer } from "./items-burger";
import { orderDetailReducer } from "./order";
import { authDataReducer } from "./auth";

export const rootReducer = combineReducers({
  itemsBurger: itemsBurgerReducer,
  orderDetail: orderDetailReducer,
  ingredients: ingredientsConstructorReduser,
  ingredientDetail: ingredientDetailReducer,
  authDataUser: authDataReducer,
});
