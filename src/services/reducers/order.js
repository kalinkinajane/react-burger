import {
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from "../actions/order";

const initialState = {
  orderDetail: null,
  orderDetailRequest: false,
  orderDetailFailed: false,
};

export const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERDETAILS_REQUEST: {
      return {
        ...state,
        orderDetailRequest: true,
      };
    }
    case GET_ORDERDETAILS_SUCCESS: {
      return {
        ...state,
        orderDetailRequest: false,
        orderDetail: action.orderDetail,
        orderDetailFailed: false,
      };
    }
    case GET_ORDERDETAILS_FAILED: {
      return {
        ...state,
        orderDetailFailed: true,
        orderDetailRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
