import React from "react";

import Header from "./Header";
import style from "./dashboard.module.css";

const Attendence = () => {
  return (
    <div className={style.profile}>
      <Header title="Attendence" />
      <div className={style.container}>Attendence !! Comming Soon!!</div>
    </div>
  );
};

export default Attendence;
