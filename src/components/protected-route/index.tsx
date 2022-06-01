import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../../utils/hooks";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isLogin } = useSelector((store) => store.authDataUser);
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
