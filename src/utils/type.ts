import { Location } from "history";

export type TLocation = {
  background?: Location;
  from?: string
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