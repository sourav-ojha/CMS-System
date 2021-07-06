import React from "react";
import { useDispatch } from "react-redux";
import { currentProfile } from "../../action/currentProfile";

import styles from "./studentPage.module.css";

const StudentTable = ({ profile }) => {
  const dispatch = useDispatch();
  const handleRowClick = () => {
    dispatch(currentProfile(profile._id));
  };
  return (
    <div className={styles.showRow} onClick={handleRowClick}>
      <div className={styles.td}>{profile.rollno}</div>
      <div className={styles.td}>{profile.name}</div>
      <div className={styles.td}>{profile.email}</div>
      <div className={styles.td}>{profile.course}</div>
    </div>
  );
};

export default StudentTable;
