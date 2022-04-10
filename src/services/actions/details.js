export const ADD_VIEW_INGREDIENT = "ADD_VIEW_INGREDIENT";
export const REMOVE_VIEW_INGREDIENT = "REMOVE_VIEW_INGREDIENT";

export const addIngredient = (item) => ({
  type: ADD_VIEW_INGREDIENT,
  payload: item,
});

export const removeIngredient = () => ({
  type: REMOVE_VIEW_INGREDIENT,
});
