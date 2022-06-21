/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as actions from "../actions/details";

import { ingredientDetailReducer, initialState } from "./details";

const viewIngredient = {
  calories: 420,
  carbohydrates: 53,
  fat: 24,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  name: "Краторная булка N-200i",
  price: 1255,
  proteins: 80,
  type: "bun",
  _id: "60d3b41abdacab0026a733c6",
};

describe("detail reducer", () => {
  it("should return the initial state", () => {
    expect(
      ingredientDetailReducer(undefined, <actions.TDetailsActions>{})
    ).toEqual(initialState);
  });

  it("should handle ADD_VIEW_INGREDIENT", () => {
    expect(
      ingredientDetailReducer(
        initialState,
        actions.addIngredient(viewIngredient)
      )
    ).toEqual({ ...initialState, viewIngredient: viewIngredient });
  });
  
  it("should handle REMOVE_VIEW_INGREDIENT", () => {
    expect(
      ingredientDetailReducer(initialState, actions.removeIngredient())
    ).toEqual(initialState);
  });
});
