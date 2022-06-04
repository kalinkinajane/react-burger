import { TIngredient } from "../../utils/type";
import {
  ADD_VIEW_INGREDIENT,
  REMOVE_VIEW_INGREDIENT,
} from "../action-types/action-types";

export interface IAddViewIngredient {
  readonly type: typeof ADD_VIEW_INGREDIENT;
  readonly payload: TIngredient;
}
export interface IRemoveViewIngredient {
  readonly type: typeof REMOVE_VIEW_INGREDIENT;
}

export type TDetailsActions = IAddViewIngredient
| IRemoveViewIngredient;

export const addIngredient = (item: TIngredient):IAddViewIngredient => ({
  type: ADD_VIEW_INGREDIENT,
  payload: item,
});

export const removeIngredient = (): IRemoveViewIngredient => ({
  type: REMOVE_VIEW_INGREDIENT,
});
