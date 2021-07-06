import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Exam from "./Exam";
import style from "./dashboard.module.css";
import Result from "./Result";
import Attendence from "./Attendence";
import OverView from "./OverView";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  console.log(url);

  return (
    <div className={style.dashboard}>
      <div className={style.body}>
        <NavBar />
        <Route path={`${url}/`} exact component={OverView}></Route>
        <Route path={`${url}/profile`}>
          <Profile />
        </Route>
        <Route path={`${url}/exam`} component={Exam}></Route>
        <Route path={`${url}/result`} component={Result}></Route>
        <Route path={`${url}/attendence`} component={Attendence}></Route>
      </div>
    </div>
  );
};

export default Dashboard;
