import uuid from "react-uuid";

export const ADD_INGREDIENTS_BURGER = "ADD_INGREDIENTS_BURGER";
export const ADD_BUN = "ADD_BUN";
export const DELETE_INGREDIENT_BURGER = "DELETE_INGREDIENT_BURGER";
export const UPDATE_INGREDIENTS_CONSTRUCTOR = "UPDATE_INGREDIENTS_CONSTRUCTOR";
export const CLEAR_INGREDIENTS_CONSTRUCTOR = "CLEAR_INGREDIENTS_CONSTRUCTOR";

export const addBun = (item) => ({
  type: ADD_BUN,
  payload: { ...item, itemId: uuid() },
});

export const addIngredients = (item) => ({
  type: ADD_INGREDIENTS_BURGER,
  payload: { ...item, itemId: uuid() },
});
export const deleteIngredient = (id) => ({
  type: DELETE_INGREDIENT_BURGER,
  payload: id,
});
export const updateIngredients = (ingredients) => ({
  type: UPDATE_INGREDIENTS_CONSTRUCTOR,
  payload: ingredients,
});
export const clearIngredients = () => ({
  type: CLEAR_INGREDIENTS_CONSTRUCTOR,
});
