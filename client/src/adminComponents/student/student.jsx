import React from "react";
import styles from '../style.module.css'
function student({ student, setCurrentId }) {

  return (

     <>
        <td>{student.username}</td>
        <td>{student.fullname}</td>
        <td>{student.phno}</td>
        <td>{student.email}</td>
        <td>{student.course}</td>
        <td className={styles.edit} onClick={() => setCurrentId(student._id) }>Edit</td>
     </>

  );
}

export default student;
