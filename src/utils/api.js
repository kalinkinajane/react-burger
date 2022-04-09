import { baseUrl } from "../constants/constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

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
