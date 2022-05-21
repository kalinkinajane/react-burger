import { baseUrl } from "../constants/constants";
import { checkResponse } from "./check-response";
import { TCreateOrder, TGetIngredients, TIngredientsId } from "./type";


export const requestApi = () => {
  return fetch(`${baseUrl}/ingredients`, {
    method: "GET",
  }).then((res) => checkResponse<TGetIngredients>(res));
};

export const createOrder = (ids: TIngredientsId, token: string) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(ids),
  }).then((res) => checkResponse<TCreateOrder>(res));
};
