import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { WS_CONNECTION_START } from "../action-types/ws-action-types";
import {
  closedConnection,
  errorConnection,
  getOrdersWs,
  successConnection,
  TWsActions,
} from "../actions/ws-actions";


export const socketMiddleware = (wsUrl: string): Middleware => {
  return (store: { dispatch: Dispatch<TWsActions> }) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(successConnection());
        };

        socket.onclose = () => {
          dispatch(closedConnection());
        };

        socket.onerror = () => {
          dispatch(errorConnection());
        };
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch(getOrdersWs(JSON.parse(data)));
        };
      }

      next(action);
    };
  };
};
