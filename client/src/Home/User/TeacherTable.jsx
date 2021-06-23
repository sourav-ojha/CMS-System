import React from "react";
import styles from "./studentPage.module.css";

const TeacherTable = ({profile}) => {
  console.log(profile);
  return (
    <div className={styles.showRow}>
        <div></div>
      {/* <div className={styles.td}>{profile.rollno}</div> */}
      <div className={styles.td}>{profile.name}</div>
      <div className={styles.td}>{profile.email}</div>
      <div className={styles.td}>{profile.course}</div>
    </div>
  );
};

export default TeacherTable;
