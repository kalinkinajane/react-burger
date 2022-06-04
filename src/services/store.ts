import { compose, createStore, applyMiddleware } from "redux";
import thunk, { ThunkAction } from 'redux-thunk';

import { rootReducer } from "./reducers/index";

import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "./action-types/ws-action-types";
import { socketMiddleware } from "./middelware/socketMiddelware";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const wsUrl = 'wss://norma.nomoreparties.space/orders'

// const wsActions = {
//   wsStart: WS_CONNECTION_START,
//   onError: WS_CONNECTION_ERROR,
//   onOrders: WS_GET_ORDERS,
//   onClose: WS_CONNECTION_CLOSED,
// };

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl)));

const store = createStore(rootReducer, enhancer);





export default store;
