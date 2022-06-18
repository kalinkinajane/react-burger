import { TIngredient } from "../../utils/type";
import { TItemsBurgerActions } from "../actions/items-burger";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
} from "../action-types/action-types";

type TItemsBurgerState ={
  items: Array<TIngredient>,
  itemsRequest: boolean,
  itemsFailed: boolean,
}
export const initialState: TItemsBurgerState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const itemsBurgerReducer = (state = initialState, action: TItemsBurgerActions): TItemsBurgerState => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false,
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
