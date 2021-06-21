import React from "react";
import styles from '../style.module.css'
function student({ student, setCurrentId }) {

  return (

     <>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>
        <td>{student.phno}</td>
        <td>{student.email}</td>
        <td>{student.course}</td>
        <td className={styles.edit} onClick={() => setCurrentId(student._id) }>Edit</td>
     </>

  );
}

export default student;
