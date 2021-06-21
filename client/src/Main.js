import React from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
import Admin from "./components/adminComponents/Admin";
import Dashboard from "./components/dashboard/Dashboard";
import { useAuthValue } from "./helper/AuthProvider";

const Main = () => {
  const loggedUser = useAuthValue();
  console.log("Role to be logged in", loggedUser.role);

  return (
    <>
      <Route path="/dashboard" >
        {loggedUser.role === "admin" ? <Admin /> : <Dashboard />}{" "}
      </Route>
    </>
  );
};

export default Main;
