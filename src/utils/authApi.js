import { baseUrl, authUrl } from "../constants/constants";
import { checkResponse } from "./check-response";
import { getCookie } from "./utilsCookie";

export const register = (dataForm) => {
  return fetch(`${authUrl}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  }).then(checkResponse);
};

export const login = (dataForm) => {
  return fetch(`${authUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  }).then(checkResponse);
};
export const refresh = () => {
  return fetch(`${authUrl}/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(checkResponse);
};

export const getUser = () => {
  return fetch(`${authUrl}/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: getCookie("accessToken"),
    },
  }).then(checkResponse);
};

export const updateUser = (name, email) => {
  return fetch(`${authUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ email, name }),
  }).then(checkResponse);
};
export const logoutUser = () => {
  return fetch(`${authUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(checkResponse);
};

export const forgotPassword = (email) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};

export const resetPassword = (password, token) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  }).then(checkResponse);
};
