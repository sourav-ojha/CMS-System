import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthValue } from "./helper/AuthProvider";

import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";

import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Main from "./Main";
import AdminDashboard from "./Home/AdminDashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/test" component={AdminDashboard}></Route> */}
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/" component={Main} />
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
