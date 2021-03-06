import React from "react";
import Student from "./student";
import styles from "../style.module.css";
import { useSelector } from "react-redux";

function Students({ setCurrentId }) {
  const student = useSelector((state) => state.group);

  return (
    <div className={styles.teacher}>
      {!student.length ? (
        <h2>No Student Found</h2>
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
            {student
              .sort((a, b) => a.firstname.localeCompare(b.firstname))
              .map((s) => (
                <tr key={s._id} className={styles.tr}>
                  <Student student={s} setCurrentId={setCurrentId} />
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Students;
