import { createOrder, requestApi } from "../../utils/api";
// BurgerIngredients
export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

// BurgerIngredients
export const getItems = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    requestApi()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: res.data,
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({ type: GET_ITEMS_FAILED });
      });
  };
};

// BurgerConstructor
export const ADD_INGREDIENT_BURGER = "ADD_INGREDIENT_BURGER";

export const changeIngredientBurger = () => {};

// IngredientDetails
export const ADD_VIEW_INGREDIENT = "ADD_VIEW_INGREDIENT";
export const REMOVE_VIEW_INGREDIENT = "REMOVE_VIEW_INGREDIENT";

export const addIngredient = (item) => ({
  type: ADD_VIEW_INGREDIENT,
  payload: item,
});

// OrderDetails

export const GET_ORDERDETAILS_REQUEST = "GET_ORDERDETAILS_REQUEST";
export const GET_ORDERDETAILS_SUCCESS = "GET_ORDERDETAILS_SUCCESS";
export const GET_ORDERDETAILS_FAILED = "GET_ORDERDETAILS_FAILED";

export const createOrderDetails = (ids) => {
  return function (dispatch) {
    dispatch({ type: GET_ORDERDETAILS_REQUEST });
    createOrder(ids).then((res) => {
        if (res && res.success) {
            dispatch({
            type: GET_ORDERDETAILS_SUCCESS,
            orderDetail: res,
          });
        } else{
            dispatch({type: GET_ORDERDETAILS_FAILED})
        }
      }).catch((err) => {
        dispatch({ type: GET_ORDERDETAILS_FAILED });
      });
  };

};
