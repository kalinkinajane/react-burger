import { createOrder } from "../../utils/api";
import { clearIngredients } from "./ingredients-constructor";
import {
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from "../action-types/action-types";
import { TCreateOrder, TIngredientsId } from "../../utils/type";
import { AppDispatch, AppThunk } from "../types";

export interface IGetOrderDetailsRequest {
  readonly type: typeof GET_ORDERDETAILS_REQUEST;
}
export interface IGetOrderDetailsSuccess {
  readonly type: typeof GET_ORDERDETAILS_SUCCESS;
  readonly orderDetail: TCreateOrder;
}
export interface IGetOrderDetailsFailed {
  readonly type: typeof GET_ORDERDETAILS_FAILED;
}
export type TOrderDetailsActions = IGetOrderDetailsRequest
| IGetOrderDetailsSuccess
| IGetOrderDetailsFailed

export const getOrderRequest = (): IGetOrderDetailsRequest => ({
  type: GET_ORDERDETAILS_REQUEST,
});

export const getOrderSuccess = (data: TCreateOrder): IGetOrderDetailsSuccess => ({
  type: GET_ORDERDETAILS_SUCCESS,
  orderDetail: data,
});

export const getOrderFailed = (): IGetOrderDetailsFailed => ({
  type: GET_ORDERDETAILS_FAILED,
});

export const createOrderDetails: AppThunk  = (ids: TIngredientsId, token: string) => {
  return function (dispatch: AppDispatch ) {
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
