import {
  ADD_VIEW_INGREDIENT,
  REMOVE_VIEW_INGREDIENT,
} from "../actions/details";

const initialState = {
  viewIngredient: {},
};

export const ingredientDetailReducer = (state = initialState, action) => {
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