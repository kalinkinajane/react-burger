import * as actions from "../actions/order";
import { initialState, orderDetailReducer } from "./order";

const order = {
  name: "Антарианский space флюоресцентный бургер",
  success: true,
  order: {
    number: 18024,
  },
};

describe("detail reducer", () => {
  it("should return the initial state", () => {
    expect(
      orderDetailReducer(undefined, <actions.TOrderDetailsActions>{})
    ).toEqual(initialState);
  });

  it("should handle GET_ORDERDETAILS_REQUEST", () => {
    expect(orderDetailReducer(initialState, actions.getOrderRequest())).toEqual(
      { ...initialState, orderDetailRequest: true }
    );
  });

  it("should handle GET_ORDERDETAILS_SUCCESS", () => {
    expect(
      orderDetailReducer(initialState, actions.getOrderSuccess(order))
    ).toEqual({
      ...initialState,
      orderDetailRequest: false,
      orderDetail: order,
      orderDetailFailed: false,
    });
  });

  it("should handle GET_ORDERDETAILS_FAILED", () => {
    expect(orderDetailReducer(initialState, actions.getOrderFailed())).toEqual({
      ...initialState,
      orderDetailFailed: true,
      orderDetailRequest: false,
    });
  });
});
