import { requestApi } from "../../utils/api";
import { TIngredient } from "../../utils/type";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";

export interface IGetItemsRequest {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsSuccess  {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: Array<TIngredient>;
}

export interface IGetItemFaifed {
  readonly type: typeof GET_ITEMS_FAILED;
}

export type TItemsBurgerActions = IGetItemsRequest
| IGetItemsSuccess
| IGetItemFaifed

export const getItemsRequest = (): IGetItemsRequest => ({
  type: GET_ITEMS_REQUEST,
});

export const getItemsSuccess = (items: Array<TIngredient>): IGetItemsSuccess => ({
  type: GET_ITEMS_SUCCESS,
  items: items,
});

export const getItemsFailed = (): IGetItemFaifed => ({
  type: GET_ITEMS_FAILED,
});

export const getItems: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getItemsRequest());
    requestApi()
      .then((res) => {
        if (res && res.success) {
          dispatch(getItemsSuccess(res.data));
        } else {
          dispatch(getItemsFailed());
        }
      })
      .catch((err) => {
        dispatch(getItemsFailed());
      });
  };
};
