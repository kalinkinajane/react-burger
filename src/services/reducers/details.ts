import { TIngredient } from "../../utils/type";
import { TDetailsActions } from "../actions/details";
import {
  ADD_VIEW_INGREDIENT,
  REMOVE_VIEW_INGREDIENT,
} from "../constants";

type TViewIngredientState = {
  viewIngredient: TIngredient
}
const initialState: TViewIngredientState = {
  viewIngredient: {
    _id: '',
    itemId:'',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: '',
    image_mobile: '',
    image_large: '',
}};

export const ingredientDetailReducer = (state = initialState, action: TDetailsActions) => {
  switch (action.type) {
    case ADD_VIEW_INGREDIENT: {
      return {
        ...state,
        viewIngredient: action.payload,
      };
    }
    case REMOVE_VIEW_INGREDIENT: {
      return {
        ...state,
        viewIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};