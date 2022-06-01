import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  LOGOUT_USER,
} from "../constants";

import {
  register,
  login,
  refresh,
  getUser,
  updateUser,
  logoutUser,
} from "../../utils/authApi";
import { setCookie, deleteCookie } from "../../utils/utilsCookie";
import { TDataFormRegister, TGetUser, TUserData } from "../../utils/type";
import { AppDispatch, AppThunk } from "../types";

export interface IRegisterUserRequest {
  readonly type: typeof REGISTER_USER_REQUEST;
}
export interface IRegisterUserSuccess {
  readonly type: typeof REGISTER_USER_SUCCESS;
  readonly userData: TUserData;
}
export interface IRegisterUserFailed {
  readonly type: typeof REGISTER_USER_FAILED;
}
export interface ILoginUser {
  readonly type: typeof LOGIN_USER;
  readonly userData: TUserData;
}
export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly userData: TGetUser;
}
export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
}
export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
export interface ILogoutUser {
  readonly type: typeof LOGOUT_USER;
}

export type TUserActions = | IRegisterUserRequest
| IRegisterUserSuccess
| IRegisterUserFailed
| ILoginUser
| IGetUserSuccess
| IGetUserFailed
| IGetUserRequest
| ILogoutUser;

export const registerUserRequest = (): IRegisterUserRequest => ({
  type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (data: TUserData): IRegisterUserSuccess => ({
  type: REGISTER_USER_SUCCESS,
  userData: data,
});

export const registerUserFailed = (): IRegisterUserFailed => ({
  type: REGISTER_USER_FAILED,
});

export const getUserRequest = (): IGetUserRequest => ({
  type: GET_USER_REQUEST,
});

export const getUserFailed = (): IGetUserFailed => ({
  type: GET_USER_FAILED,
});
export const getUserSuccess = (data: TGetUser): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  userData: data,
});
export const logoutUserSuccess = (): ILogoutUser => ({
  type: LOGOUT_USER,
});

export const loginUserSuccess = (data: TUserData): ILoginUser => ({
  type: LOGIN_USER,
  userData: data,
});

export const registerUser: AppThunk = (data: TDataFormRegister) => {
  return function (dispatch: AppDispatch) {
    dispatch(registerUserRequest());
    register(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(registerUserSuccess(res));
        } else {
          dispatch(registerUserFailed());
        }
      })
      .catch((err) => {
        dispatch(registerUserFailed());
      });
  };
};

export const loginUser: AppThunk = (data: TDataFormRegister) => {
  return function (dispatch: AppDispatch) {
    login(data)
      .then((res) => {
        if (res && res.success) {
          localStorage.setItem("refreshToken", res.refreshToken);
          setCookie("accessToken", res.accessToken);
          dispatch(loginUserSuccess(res));
        }
        return res;
      })
      .catch((err) => {
        dispatch(registerUserFailed());
      });
  };
};

const refreshToken: AppThunk = (afterRefresh: Function) => {
  return function (dispatch: AppDispatch) {
    refresh().then((res) => {
      localStorage.setItem("refreshToken", res.refreshToken);
      setCookie("accessToken", res.accessToken);
      dispatch(afterRefresh);
    });
  };
};

export const getUserData: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(getUserRequest());
    getUser(token)
      .then((res) => {
        if (!res.success) throw res;
        dispatch(getUserSuccess(res));
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshToken(getUserData()));
        }
      });
  };
};

export const updateUserData: AppThunk = (name: string, email: string, token: string) => {
  return function (dispatch : AppDispatch) {
    dispatch(getUserRequest());
    updateUser(name, email, token)
      .then((res) => {
        if (res && res.success) {
          dispatch(getUserSuccess(res));
        } else {
          throw res;
        }
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshToken(getUserData()));
        }
      });
  };
};

export const logoutDataUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getUserRequest());
    logoutUser()
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("refreshToken");
          deleteCookie("accessToken");
          dispatch(logoutUserSuccess());
        }
      })
      .catch((err) => {
        dispatch(getUserFailed());
      });
  };
};
