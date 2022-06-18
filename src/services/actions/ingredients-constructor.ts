
import { TIngredient } from "../../utils/type";
import {
  ADD_INGREDIENTS_BURGER,
  ADD_BUN,
  DELETE_INGREDIENT_BURGER,
  UPDATE_INGREDIENTS_CONSTRUCTOR,
  CLEAR_INGREDIENTS_CONSTRUCTOR,
} from "../action-types/action-types";

export interface IAddIngredientsBurger {
  readonly type: typeof ADD_INGREDIENTS_BURGER;
  readonly payload: TIngredient;
}
export interface IAddBun {
  readonly type: typeof ADD_BUN;
  readonly payload:  TIngredient;
}
export interface IDeleteIngredientBurger {
  readonly type: typeof DELETE_INGREDIENT_BURGER;
  readonly payload: string | undefined;
}
export interface IUpdateIngredientsConstructor {
  readonly type: typeof UPDATE_INGREDIENTS_CONSTRUCTOR;
  readonly payload: Array<TIngredient>
}
export interface IClearIngredientsConstructor {
  readonly type: typeof CLEAR_INGREDIENTS_CONSTRUCTOR;
}

export type TIngredientsConstrctorActions = IAddIngredientsBurger
| IAddBun
| IDeleteIngredientBurger
| IUpdateIngredientsConstructor
| IClearIngredientsConstructor

export const addBun = (item: TIngredient): IAddBun => ({
  type: ADD_BUN,
  payload: item ,
});

export const addIngredients = (item: TIngredient): IAddIngredientsBurger => ({
  type: ADD_INGREDIENTS_BURGER,
  payload: item,
});

export const deleteIngredient = (id: string | undefined): IDeleteIngredientBurger => ({
  type: DELETE_INGREDIENT_BURGER,
  payload: id,
});

export const updateIngredients = (ingredients: Array<TIngredient>): IUpdateIngredientsConstructor => ({
  type: UPDATE_INGREDIENTS_CONSTRUCTOR,
  payload: ingredients,
});

export const clearIngredients = (): IClearIngredientsConstructor => ({
  type: CLEAR_INGREDIENTS_CONSTRUCTOR,
});
