import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TUserActions } from "../actions/auth";
import store from "../store";
import { TDetailsActions } from '../actions/details';
import { TIngredientsConstrctorActions } from '../actions/ingredients-constructor';
import { TItemsBurgerActions } from '../actions/items-burger';
import { TOrderDetailsActions } from '../actions/order';



export type TApplicationActions = TUserActions
| TDetailsActions
| TIngredientsConstrctorActions
| TItemsBurgerActions
| TOrderDetailsActions;

export type RootState = ReturnType<typeof store.getState>; 

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>; 

// export type AppDispatch =  Dispatch<TApplicationActions> | AppThunk; 
export type AppDispatch = typeof store.dispatch | AppThunk; 