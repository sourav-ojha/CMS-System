import React from "react";

import StudentTable from "./StudentTable";
import styles from "./studentPage.module.css";
import { useParams } from "react-router-dom";

const ShowAll = () => {

  const {role} = useParams();
  const user = {
    rollno: "1",
    name: "sourav ojha",
    email: "subham@gmail.com",
    course: "BCA",
  };

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
      <StudentTable profile={user} />
    </div>
    </div>
  );
};

export default ShowAll;
