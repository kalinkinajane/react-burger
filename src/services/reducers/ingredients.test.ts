import * as actions from "../actions/ingredients-constructor";
import { initialState } from "./ingredients";
import { ingredientsConstructorReduser } from "./ingredients";

const bun = {
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

describe("ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(
      ingredientsConstructorReduser(
        undefined,
        <actions.TIngredientsConstrctorActions>{}
      )
    ).toEqual(initialState);
  });

  it("should handle ADD_BUN", () => {
    expect(
      ingredientsConstructorReduser(initialState, actions.addBun(bun))
    ).toEqual({ ...initialState, bun: bun, price: bun.price });
  });

  it("should handle ADD_INGREDIENTS_BURGER", () => {
    expect(
      ingredientsConstructorReduser(
        initialState,
        actions.addIngredients(ingredient)
      )
    ).toEqual({
      ...initialState,
      burgerIngredients: [...initialState.burgerIngredients, ingredient],
    });
  });

  it("should handle  DELETE_INGREDIENT_BURGER", () => {
    expect(
      ingredientsConstructorReduser(
        initialState,
        actions.deleteIngredient(ingredient._id)
      )
    ).toEqual({
      ...initialState,
      burgerIngredients: [],
    });
  });

  it("should handle UPDATE_INGREDIENTS_CONSTRUCTOR", () => {
    expect(
      ingredientsConstructorReduser(
        initialState,
        actions.updateIngredients([ingredient])
      )
    ).toEqual({
      ...initialState,
      burgerIngredients: [ingredient],
    });
  });

  it("should handle CLEAR_INGREDIENTS_CONSTRUCTOR", () => {
    expect(
      ingredientsConstructorReduser(initialState, actions.clearIngredients())
    ).toEqual(initialState);
  });
});
