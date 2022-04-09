import {
  ADD_INGREDIENTS_BURGER,
  ADD_BUN,
  DELETE_INGREDIENT_BURGER,
  UPDATE_INGREDIENTS_CONSTRUCTOR,
  CLEAR_INGREDIENTS_CONSTRUCTOR,
} from "../actions/ingredients-constructor";

const initialState = {
  ingredients: [],
  bun: null,
};

export const ingredientsConstructorReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: action.payload,
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
        ...state,
        ingredients: [],
        bun: null,
      };
    }
    default: {
      return state;
    }
  }
};
