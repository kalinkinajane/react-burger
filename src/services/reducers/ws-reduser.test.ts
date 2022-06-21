import * as actions from "../actions/ws-actions";
import { initialState, wsReduser } from "./ws-reduser";

const url = "https://norma.nomoreparties.space";

const orders = {
  orders: {
    createdAt: "2022-06-18T19:30:17.170Z",
    ingredients: [
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733cd",
    ],
    name: "Space флюоресцентный бургер",
    number: 18086,
    status: "done",
    updatedAt: "2022-06-18T19:30:17.525Z",
    _id: "62ae27c9fa747e001bd53288",
  },
  total: 0,
  totalToday: 0,
  error: "error",
};

describe("detail reducer", () => {
  it("should return the initial state", () => {
    expect(wsReduser(undefined, <actions.TWsActions>{})).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_START", () => {
    expect(wsReduser(initialState, actions.startConnection(url))).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    });
  });

  it("should handle WS_CONNECTION_SUCCESS", () => {
    expect(wsReduser(initialState, actions.successConnection())).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    });
  });

  it("should handle WS_CONNECTION_ERROR", () => {
    expect(wsReduser(initialState, actions.errorConnection())).toEqual(
      initialState
    );
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    expect(wsReduser(initialState, actions.closedConnection())).toEqual(
      initialState
    );
  });

  it("should handle WS_GET_ORDERS", () => {
    expect(wsReduser(initialState, actions.getOrdersWs(orders))).toEqual({
      ...initialState,
      orders: orders.orders,
      total: orders.total,
      totalToday: orders.totalToday,
    });
  });
});
