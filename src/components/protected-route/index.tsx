import React, { FC } from "react";
import { Route, Redirect, RouteProps, useLocation } from "react-router-dom";
import { useSelector } from "../../utils/hooks";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isLogin } = useSelector((store) => store.authDataUser);
  const location = useLocation();

  if (isLogin) {
    return (
        <Route {...rest}>
            {children}
        </Route>
    )
} else {
    return (<Redirect
        to={{
            pathname: '/login',
            state: {from: location}
        }}
    />)
}
};
