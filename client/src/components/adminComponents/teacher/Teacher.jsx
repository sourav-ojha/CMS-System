import React from "react";
import styles from '../style.module.css';
function Teacher({ teacher, setCurrentId }) {
  
  return (
    
     <>
        <td>{teacher.firstname}</td>
        <td>{teacher.lastname}</td>
        <td>{teacher.phno}</td>
        <td>{teacher.email}</td>
        <td className={styles.edit} onClick={() => setCurrentId(teacher._id) }>Edit</td>
     </>
    
  );
}

export default Teacher;
