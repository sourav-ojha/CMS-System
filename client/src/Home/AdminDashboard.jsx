import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Content from "./Content";
import NavBar from "./NavBar";
import Profile from "./Profile";
import AddForm from "./User/AddForm";
import SearchForm from "./User/SearchForm";
import ShowAll from "./User/ShowAll";
import { useAuthValue } from "../helper/AuthProvider";

import styles from "./test.module.css";
import { currentProfile } from "../action/currentProfile";

const Test = () => {
  const { url } = useRouteMatch();
  // const loggedUser = useAuthValue();
  // const dispatch = useDispatch();
  // dispatch(currentProfile(loggedUser._id));
  // console.log("logged user : ", loggedUser._id);
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
        <NavBar />
        <Route path={`${url}`} exact component={Content} />
        <Route path={`${url}/show/:Role`} component={ShowAll} />
        <Route path={`${url}/add/:Role`} component={AddForm} />
        <Route path={`${url}/search/:Role`} component={SearchForm} />
        <Profile />
      </div>
    </div>
  );
};

export default Test;
