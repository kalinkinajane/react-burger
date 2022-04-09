import { createOrder } from "../../utils/api";

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

export const createOrderDetails = (ids) => {
  return function (dispatch) {
    dispatch(getOrderRequest());
    createOrder(ids)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccess(res));
        } else {
          dispatch(getOrderFailed());
        }
      })
      .catch((err) => {
        dispatch(getOrderFailed());
      });
  };
};
