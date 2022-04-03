import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  ADD_VIEW_INGREDIENT,
  REMOVE_VIEW_INGREDIENT,
  GET_ORDERDETAILS_REQUEST,
  GET_ORDERDETAILS_SUCCESS,
  GET_ORDERDETAILS_FAILED,
} from "../actions/index";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,

  ingredients: [],

  viewIngredient: {},

  orderDetail: null,
  orderDetailRequest: false,
  orderDetailFailed: false,
};

// BurgerIngredients
export const ingredientsReducer = (state = initialState, action) => {
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

// IngredientDetails

// export const viewIngredientReduser = (state = initialState, action) => {
//   switch (action.type) {

//     default: {
//       return state;
//     }
//   }
// };

export const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERDETAILS_REQUEST: {
      return {
        ...state,
        orderDetailRequest: true,
      };
    }
    case GET_ORDERDETAILS_SUCCESS: {
      return{
        ...state,
        orderDetailRequest: false,
        orderDetail: action.orderDetail,
        orderDetailFailed: false,
      }
    }
    case GET_ORDERDETAILS_FAILED: {
      return{
        ...state,
        orderDetailFailed: true,
        orderDetailRequest: false,
      }
    }
    default: {
      return state;
    }
  }
};