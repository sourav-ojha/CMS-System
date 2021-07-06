import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import StudentTable from "./StudentTable";
import styles from "./studentPage.module.css";
import { useParams } from "react-router-dom";
import { fetch } from "../../action/admin";

const ShowAll = () => {
  const { Role } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(fetch(Role));
  }, [Role]);

  return (
    <div className={styles.body}>
      <div className={styles.showHead}></div>
      <div className={styles.sticky_wrapper}>
        <div className={`${styles.showHead} ${styles.sticky}`}>
          <div className={styles.th}>Roll no</div>
          <div className={styles.th}>Name</div>
          <div className={styles.th}>Email</div>
          <div className={styles.th}>Course</div>
        </div>
        {user
          .sort((a, b) => a.firstname.localeCompare(b.firstname))
          .map((u) => (
            <StudentTable profile={u} />
          ))}
      </div>
    </div>
  );
};

export default ShowAll;
