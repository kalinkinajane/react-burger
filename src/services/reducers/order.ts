import { TCreateOrder } from "../../utils/type";
import { TOrderDetailsActions } from "../actions/order";
import {
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from "../constants";

type TItemsBurgerState ={
  orderDetail: TCreateOrder | null,
  orderDetailRequest: boolean,
  orderDetailFailed: boolean,
}

const initialState: TItemsBurgerState = {
  orderDetail: null,
  orderDetailRequest: false,
  orderDetailFailed: false,
};

export const orderDetailReducer = (state = initialState, action: TOrderDetailsActions) => {
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
