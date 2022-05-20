import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

type TProtectedRouteProps={
  path: string;
  exact: boolean
}
export const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, ...rest }) => {
  const { isLogin } = useSelector((store: any) => store.authDataUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
