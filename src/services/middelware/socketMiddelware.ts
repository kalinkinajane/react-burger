import { Dispatch, Middleware } from "redux";
import {
  closedConnection,
  errorConnection,
  getOrdersWs,
  successConnection,
  TWsActions,
} from "../actions/ws-actions";

export type WsActions = {
  wsStart: string;
  onError: string;
  onOrders: string;
  onClose: string;
};

export const socketMiddleware = (wsActions: WsActions): Middleware => {
  return (store: { dispatch: Dispatch<TWsActions> }) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart } = wsActions;
      if (type === wsStart) {
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
