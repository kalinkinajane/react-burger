import { createOrder} from "../../utils/api";

export const GET_ORDERDETAILS_REQUEST = "GET_ORDERDETAILS_REQUEST";
export const GET_ORDERDETAILS_SUCCESS = "GET_ORDERDETAILS_SUCCESS";
export const GET_ORDERDETAILS_FAILED = "GET_ORDERDETAILS_FAILED";

export const createOrderDetails = (ids) => {
  return function (dispatch) {
    dispatch({ type: GET_ORDERDETAILS_REQUEST });
    createOrder(ids)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDERDETAILS_SUCCESS,
            orderDetail: res,
          });
        } else {
          dispatch({ type: GET_ORDERDETAILS_FAILED });
        }
      })
      .catch((err) => {
        dispatch({ type: GET_ORDERDETAILS_FAILED });
      });
  };
};
