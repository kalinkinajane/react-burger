import { createOrder } from "../../utils/api";
import { clearIngredients } from "./ingredients-constructor";

export const GET_ORDERDETAILS_REQUEST = "GET_ORDERDETAILS_REQUEST";
export const GET_ORDERDETAILS_SUCCESS = "GET_ORDERDETAILS_SUCCESS";
export const GET_ORDERDETAILS_FAILED = "GET_ORDERDETAILS_FAILED";

export const getOrderRequest = () => ({
  type: GET_ORDERDETAILS_REQUEST,
});

export const getOrderSuccess = (data) => ({
  type: GET_ORDERDETAILS_SUCCESS,
  orderDetail: data,
});

export const getOrderFailed = () => ({
  type: GET_ORDERDETAILS_FAILED,
});

export const createOrderDetails = (ids, token) => {
  return function (dispatch) {
    dispatch(getOrderRequest());
    createOrder(ids, token)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccess(res));
          dispatch(clearIngredients());
        } else {
          dispatch(getOrderFailed());
        }
      })
      .catch((err) => {
        dispatch(getOrderFailed());
      });
  };
};
