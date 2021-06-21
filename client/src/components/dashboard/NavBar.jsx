import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import style from "./dashboard.module.css";

const NavBar = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className={style.navbar}>
      <Link to={`${url}`}>
        <div className={style.header}>DashBoard</div>
      </Link>
      <div className={style.menu}>
        <Link to={`${url}/profile`} className={style.menu_item}>
          <div></div>
          <div>Profile</div>
        </Link>
        <Link to={`${url}/exam`} className={style.menu_item}>
          <div></div>
          <div>Exam</div>
        </Link>
        <Link to={`${url}/result`} className={style.menu_item}>
          <div></div>
          <div>Result</div>
        </Link>
        <Link to={`${url}/attendence`} className={style.menu_item}>
          <div></div>
          <div>Attendence</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
