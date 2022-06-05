import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TUserActions } from "../actions/auth";
import store from "../store";
import { TDetailsActions } from '../actions/details';
import { TIngredientsConstrctorActions } from '../actions/ingredients-constructor';
import { TItemsBurgerActions } from '../actions/items-burger';
import { TOrderDetailsActions } from '../actions/order';
import { TWsActions } from '../actions/ws-actions';




export type TApplicationActions = TUserActions
| TDetailsActions
| TIngredientsConstrctorActions
| TItemsBurgerActions
| TOrderDetailsActions
| TWsActions;

export type RootState = ReturnType<typeof store.getState>; 


export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>; 
export type AppDispatch = typeof store.dispatch | AppThunk;

