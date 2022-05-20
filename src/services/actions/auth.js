import {
  register,
  login,
  refresh,
  getUser,
  updateUser,
  logoutUser,
} from "../../utils/authApi";
import { setCookie, deleteCookie } from "../../utils/utilsCookie";

//регистрация
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});
export const registerUserSuccess = (data) => ({
  type: REGISTER_USER_SUCCESS,
  userData: data,
});
export const registerUserFailed = () => ({
  type: REGISTER_USER_FAILED,
});

export const registerUser = (data) => {
  return function (dispatch) {
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

//авторизация
export const LOGIN_USER = "LOGIN_USER";

export const loginUserSuccess = (data) => ({
  type: LOGIN_USER,
  userData: data,
});
export const loginUser = (data) => {
  return function (dispatch) {
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

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const LOGOUT_USER = "LOGOUT_USER";

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserFailed = () => ({
  type: GET_USER_FAILED,
});
export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  userData: data,
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
});

const refreshToken = (afterRefresh) => {
  return function (dispatch) {
    refresh().then((res) => {
      localStorage.setItem("refreshToken", res.refreshToken);
      setCookie("accessToken", res.accessToken);
      dispatch(afterRefresh);
    });
  };
};
export const getUserData = (token) => {
  return function (dispatch) {
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

export const updateUserData = (name, email, token) => {
  return function (dispatch) {
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

export const logoutDataUser = () => {
  return function (dispatch) {
    dispatch(getUserRequest());
    logoutUser()
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("refreshToken");
          deleteCookie("accessToken", res.accessToken);
          dispatch(logoutUserSuccess());
        }
      })
      .catch((err) => {
        dispatch(getUserFailed());
      });
  };
};
