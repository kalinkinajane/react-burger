import { requestApi } from "../../utils/api";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const getItemsRequest = () => ({
  type: GET_ITEMS_REQUEST,
});

export const getItemsSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  items: items,
});

export const getItemsFailed = () => ({
  type: GET_ITEMS_FAILED,
});

export const getItems = () => {
  return function (dispatch) {
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
