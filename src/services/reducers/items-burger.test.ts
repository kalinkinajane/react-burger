/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as actions from "../actions/items-burger";
import { initialState, itemsBurgerReducer } from "./items-burger";

const ingredient = {
  calories: 643,
  carbohydrates: 85,
  fat: 26,
  image: "https://code.s3.yandex.net/react/code/meat-03.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  name: "Филе Люминесцентного тетраодонтимформа",
  price: 988,
  proteins: 44,
  type: "main",
  _id: "60d3b41abdacab0026a733c8",
};

describe("detail reducer", () => {
  it("should return the initial state", () => {
    expect(
      itemsBurgerReducer(undefined, <actions.TItemsBurgerActions>{})
    ).toEqual(initialState);
  });

  it("should handle GET_ITEMS_REQUEST", () => {
    expect(itemsBurgerReducer(initialState, actions.getItemsRequest())).toEqual(
      { ...initialState, itemsRequest: true }
    );
  });

  it("should handle GET_ITEMS_SUCCESS", () => {
    expect(
      itemsBurgerReducer(initialState, actions.getItemsSuccess([ingredient]))
    ).toEqual({
      ...initialState,
      itemsFailed: false,
      items: [ingredient],
      itemsRequest: false,
    });
  });

  it("should handle GET_ITEMS_FAILED", () => {
    expect(itemsBurgerReducer(initialState, actions.getItemsFailed())).toEqual({
      ...initialState,
      itemsFailed: true,
      itemsRequest: false,
    });
  });
});
