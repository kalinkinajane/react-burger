import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../action-types/ws-action-types";

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: any;
}
// export interface IWsSendMessage {
//   readonly type: typeof WS_SEND_MESSAGE;
// }

export type TWsActions = IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetOrders;


  // необходимо при инициализации на нужной странице передать урл
  //  для feed /all
  // profile token
export const startConnection = (url : string): IWsConnectionStart => ({
  type: WS_CONNECTION_START,
  payload: url,
});
export const successConnection = (): IWsConnectionSuccess => ({
  type: WS_CONNECTION_SUCCESS,
});
export const errorConnection = (): IWsConnectionError => ({
  type: WS_CONNECTION_ERROR,
});
export const closedConnection = (): IWsConnectionClosed => ({
  type: WS_CONNECTION_CLOSED,
});
export const getOrdersWs = (orders: any): IWsGetOrders => ({
  type: WS_GET_ORDERS,
  payload: orders,
});
