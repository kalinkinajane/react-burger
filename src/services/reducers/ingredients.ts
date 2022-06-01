import { TIngredient } from "../../utils/type";
import { TIngredientsConstrctorActions } from "../actions/ingredients-constructor";
import {
  ADD_INGREDIENTS_BURGER,
  ADD_BUN,
  DELETE_INGREDIENT_BURGER,
  UPDATE_INGREDIENTS_CONSTRUCTOR,
  CLEAR_INGREDIENTS_CONSTRUCTOR,
} from "../constants";

type TIngredientsState ={
  ingredients: Array<TIngredient>,
  bun: TIngredient | null,
  price: number,
}
const initialState: TIngredientsState = {
  ingredients: [],
  bun: null,
  price: 0,
};



export const ingredientsConstructorReduser = (state = initialState, action: TIngredientsConstrctorActions): TIngredientsState => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: action.payload,
        price: action.payload.price,
      };
    }
    case ADD_INGREDIENTS_BURGER: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case DELETE_INGREDIENT_BURGER: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item) => item.itemId !== action.payload
        ),
      };
    }
    case UPDATE_INGREDIENTS_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case CLEAR_INGREDIENTS_CONSTRUCTOR: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
