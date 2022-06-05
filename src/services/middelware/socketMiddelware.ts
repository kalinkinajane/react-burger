import { Dispatch, Middleware } from "redux";
import { TWsActions } from "../actions/ws-actions";

import { WsActions } from "../../utils/type";



export const socketMiddleware = (wsActions: WsActions): Middleware => {
  return (store: { dispatch: Dispatch<TWsActions> }) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onError, onOrders, onClose, onOpen } = wsActions;

      if (type === wsStart) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };

        socket.onerror = () => {
          dispatch({ type: onError });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: onOrders, payload: JSON.parse(data) });
        };
      }
      next(action);
    };
  };
};
