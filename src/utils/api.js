import { baseUrl } from "../constants/constants";
import { checkResponse } from "./check-response";
import { getCookie } from "./utilsCookie";

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
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify(ids),
  }).then(checkResponse);
};
