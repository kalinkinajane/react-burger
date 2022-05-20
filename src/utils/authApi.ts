import { baseUrl, authUrl } from "../constants/constants";
import { checkResponse } from "./check-response";
import { TDataForm, TDataFormRegister, TGetUser, TSuccessData, TSuccessMassage, TUserData } from "./type";

export const register = (dataForm: TDataFormRegister) => {
  return fetch(`${authUrl}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  }).then((res) => checkResponse<TUserData>(res));
};

export const login = (dataForm: TDataForm) => {
  return fetch(`${authUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  }).then((res) => checkResponse<TUserData>(res));
};
export const refresh = () => {
  return fetch(`${authUrl}/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then((res) => checkResponse<TSuccessData>(res));
};


export const getUser = (token: string) => {
  return fetch(`${authUrl}/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  }).then((res) => checkResponse<TGetUser>(res));
};

export const updateUser = (name: string, email: string, token: string) => {
  return fetch(`${authUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: token,
    },
    body: JSON.stringify({ email, name }),
  }).then((res) => checkResponse<TGetUser>(res));
};

export const logoutUser = () => {
  return fetch(`${authUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(res => checkResponse<TSuccessMassage>(res));
};

export const forgotPassword = (email: string) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(res => checkResponse<TSuccessMassage>(res));
};

export const resetPassword = (password: string, token: string) => {
  return fetch(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  }).then(res => checkResponse<TSuccessMassage>(res));
};
