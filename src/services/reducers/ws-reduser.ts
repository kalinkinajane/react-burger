import { TOrderItem } from "../../utils/type";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_CONNECTION_SUCCESS,
} from "../action-types/ws-action-types";
import { TWsActions } from "../actions/ws-actions";

type TWSState = {
  wsConnected: boolean;
  orders: Array<TOrderItem>;
  total: number;
  totalToday: number;
  error?: Event;
};
export const initialState: TWSState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReduser = (
  state = initialState,
  action: TWsActions
): TWSState => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };
    }
    case WS_CONNECTION_CLOSED:
      return {
        ...initialState,
        orders: [],
        total: 0,
        totalToday: 0,
        wsConnected: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
