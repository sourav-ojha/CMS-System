import React from "react";
import { useSelector } from "react-redux";
import Teacher from "./Teacher";
import styles from "../style.module.css";

function Teachers({ setCurrentId }) {
  const teacher = useSelector((state) => state.group);
  return (
    <div className={styles.teacher}>
      {!teacher.length ? (
        <h2>No Teachers Found</h2>
      ) : (
        <table className={styles.fixed_header}>
          <thead>
            <tr>
              <th>User Name </th>
              <th>Full Name </th>
              <th>Phone No </th>
              <th>Email ID </th>
            </tr>
          </thead>
          <tbody>
            
            
              {teacher
                .sort((a, b) => a.fullname.localeCompare(b.fullname))
                .map((t) => (
                  <tr key={t._id} name={t.fullname} className={styles.tr}>
                    <Teacher teacher={t} setCurrentId={setCurrentId} />
                  </tr>
                ))}
            
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Teachers;
