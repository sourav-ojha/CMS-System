import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import Content from "./Content";
import NavBar from "./NavBar";
import Profile from "./Profile";
import AddForm from "./User/AddForm";
import SearchForm from "./User/SearchForm";
import ShowAll from "./User/ShowAll";

import styles from "./test.module.css";

const Test = () => {
  const { url } = useRouteMatch();
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
        <NavBar />
        <Route path={`${url}`} exact component={Content} />
        <Route path={`${url}/show/:role`} component={ShowAll} />
        <Route path={`${url}/add/:role`} component={AddForm} />
        <Route path={`${url}/search/:role`} component={SearchForm} />
        <Profile />
      </div>
    </div>
  );
};

export default Test;
