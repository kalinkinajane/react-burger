import * as actions from "../actions/auth";
import { authDataReducer, initialState } from "./auth";

const userData = {
  user: {
    email: "test@yandex.ru",
    name: "test",
    password: "**********",
  },
  success: true,
  accessToken: "string",
  refreshToken: "string",
};

const user = {
  email: "test@yandex.ru",
  name: "test",
  password: "",
};

describe("detail reducer", () => {
  it("should return the initial state", () => {
    expect(authDataReducer(undefined, <actions.TUserActions>{})).toEqual(
      initialState
    );
  });

  it("should handle REGISTER_USER_REQUEST", () => {
    expect(
      authDataReducer(initialState, actions.registerUserRequest())
    ).toEqual({ ...initialState, userDataRequest: true });
  });

  it("should handle REGISTER_USER_SUCCESS", () => {
    expect(
      authDataReducer(initialState, actions.registerUserSuccess(userData))
    ).toEqual({
      ...initialState,
      userDataRequest: false,
      userDataFailed: false,
      registration: true,
    });
  });

  it("should handle REGISTER_USER_FAILED", () => {
    expect(authDataReducer(initialState, actions.registerUserFailed())).toEqual(
      {
        ...initialState,
        userDataFailed: true,
        userDataRequest: false,
        isLogin: false,
        registration: false,
      }
    );
  });

  it("should handle LOGIN_USER", () => {
    expect(
      authDataReducer(initialState, actions.loginUserSuccess(userData))
    ).toEqual({
      ...initialState,
      userDataRequest: false,
      userDataFailed: false,
      registration: true,
      isLogin: true,
      userProfile: userData.user,
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(authDataReducer(initialState, actions.getUserRequest())).toEqual({
      ...initialState,
      userDataRequest: true,
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(authDataReducer(initialState, actions.getUserFailed())).toEqual({
      ...initialState,
      userDataFailed: true,
      userDataRequest: false,
      isLogin: false,
      registration: false,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      authDataReducer(initialState, actions.getUserSuccess(userData))
    ).toEqual({
      ...initialState,
      userDataRequest: false,
      userDataFailed: false,
      isLogin: true,
      registration: true,
      userProfile: userData.user,
    });
  });

  it("should handle LOGOUT_USER", () => {
    expect(authDataReducer(initialState, actions.logoutUserSuccess())).toEqual({
      ...initialState,
    });
  });
});
