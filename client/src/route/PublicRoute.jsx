import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthValue } from "../helper/AuthProvider";

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = useAuthValue();
  let isLogin = false;
  if (user) isLogin = true;
  else isLogin = false;

  console.log("user found - Public route", isLogin, user);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
