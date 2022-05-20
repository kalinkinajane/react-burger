import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
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
