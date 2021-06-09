import React from "react";
function Teacher({ teacher, setCurrentId }) {
  
  return (
    
     <>
        <td>{teacher.username}</td>
        <td>{teacher.fullname}</td>
        <td>{teacher.phno}</td>
        <td>{teacher.email}</td>
        <td onClick={() => setCurrentId(teacher._id) }>Edit</td>
     </>
    
  );
}

export default Teacher;
