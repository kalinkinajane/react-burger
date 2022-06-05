import { TDataFormRegister } from "../../utils/type";
import { TUserActions } from "../actions/auth";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  LOGOUT_USER,
} from "../action-types/action-types";

type TAuthState ={
  userProfile: TDataFormRegister,
  isLogin: boolean,
  registration: boolean,
  userDataRequest: boolean,
  userDataFailed: boolean,
}
const initialState : TAuthState = {
  userProfile: {
    name: "",
    email: "",
    password: "**********",
  },
  isLogin: false,
  registration: false,
  userDataRequest: false,
  userDataFailed: false,
};

export const authDataReducer = (state = initialState, action: TUserActions): TAuthState => {
  switch (action.type) {
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        userDataRequest: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        userDataRequest: false,
        userDataFailed: false,
        registration: true,
      };
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        userDataFailed: true,
        userDataRequest: false,
        isLogin: false,
        registration: false,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        userDataRequest: false,
        userDataFailed: false,
        registration: true,
        isLogin: true,
        userProfile: {
          ...state.userProfile,
          name: action.userData.user.name,
          email: action.userData.user.email,
        },
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        userDataRequest: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        userDataFailed: true,
        userDataRequest: false,
        isLogin: false,
        registration: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userDataRequest: false,
        userDataFailed: false,
        isLogin: true,
        registration: true,
        userProfile: {
          ...state.userProfile,
          name: action.userData.user.name,
          email: action.userData.user.email,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};
