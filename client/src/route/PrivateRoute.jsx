import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthValue } from "../helper/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useAuthValue();
 

  console.log("user found - private route", user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
