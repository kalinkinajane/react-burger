import { Location } from "history";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_ORDERS } from "../services/action-types/ws-action-types";

export type TLocation = {
  background?: Location;
  from?: string;
  pathname?: string;
};

export type TIngredient = {
  _id: string;
  itemId?: string;
  name: string;
  type: string;
  proteins: number | null ;
  fat: number | null;
  carbohydrates: number | null;
  calories: number | null;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
} ;

export type TOrderItem = {
  createdAt: string,
  ingredients: Array<string>,
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
};

export type TIngredientsId = {
  ingredients: string[];
};

export type TDataForm = {
  email: string;
  password: string;
};

export type TDataFormRegister = {
  name: string;
} & TDataForm;

export type TUser = {
  user: {
    email: string;
    name: string;
  };
};
export type TSuccessData = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};
export type TUserData = TUser & TSuccessData;

export type TGetUser = {
  success: boolean;
} & TUser;

export type TSuccessMassage = {
  success: boolean;
  message: string;
};

export type TCreateOrder = {
  name: string;
  success: boolean;
  order: {
    number: number;
  };
};
export type TGetIngredients = {
  data: Array<TIngredient>;
  success: boolean;
};

export type WsActions = {
  wsStart: typeof WS_CONNECTION_START;
  onError: typeof WS_CONNECTION_ERROR;
  onOrders: typeof WS_GET_ORDERS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onOpen: typeof WS_CONNECTION_SUCCESS;
};