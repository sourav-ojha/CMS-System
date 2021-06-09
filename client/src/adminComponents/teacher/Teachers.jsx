import React from "react";
import { useSelector } from "react-redux";
import Teacher from "./Teacher";
import styles from "./style.module.css";

function Teachers({ setCurrentId }) {
  const teacher = useSelector((state) => state.group);
  return !teacher.length ? (
    <h2>No Teachers Found</h2>
  ) : (
    <div className={styles.teacher}>
      <table className={styles.teacher_table}>
        <tr>
          <th>User Name </th>
          <th>Full Name </th>
          <th>Phone No </th>
          <th>Email ID </th>
        </tr>
        {teacher.map((t) => (
          <tr key={t._id} className={styles.tr}>
            <Teacher teacher={t} setCurrentId={setCurrentId} />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Teachers;
