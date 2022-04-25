import { baseUrl } from "../constants/constants";
import { checkResponse } from "./check-response";


export const requestApi = () => {
  return fetch(`${baseUrl}/ingredients`, {
    method: "GET",
  }).then(checkResponse);
};

export const createOrder = (ids) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ids),
  }).then(checkResponse);
};
