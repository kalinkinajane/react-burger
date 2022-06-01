import { TIngredient } from "../../utils/type";
import { TDetailsActions } from "../actions/details";
import { ADD_VIEW_INGREDIENT, REMOVE_VIEW_INGREDIENT } from "../constants";

type TViewIngredientState = {
  viewIngredient: TIngredient | null;
};
const initialState: TViewIngredientState = {
  viewIngredient: null,
};

export const ingredientDetailReducer = (
  state = initialState,
  action: TDetailsActions
): TViewIngredientState => {
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
