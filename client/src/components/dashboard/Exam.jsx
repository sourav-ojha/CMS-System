import React from "react";
import Header from "./Header";
import style from "./dashboard.module.css";

const Exam = () => {
  return (
    <div className={style.profile}>
      <Header title="Exam" />
      <div className={style.container}>Hoo this is exam</div>
    </div>
  );
};

export default Exam;
