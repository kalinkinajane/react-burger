import { baseUrl } from "../constants/constants";
import { checkResponse } from "./check-response";

export const register = (dataForm) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  }).then(checkResponse);
};
