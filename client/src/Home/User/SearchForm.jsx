import { SearchRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./studentPage.module.css";
import StudentTable from "./StudentTable";
import TeacherTable from "./TeacherTable";

const SearchForm = () => {
  const user = {
    rollno: "1",
    name: "sourav ojha",
    email: "subham@gmail.com",
    course: "BCA",
  };
  const { role } = useParams();
  const [isTeacher, setTeacher] = useState(false);

  useEffect(() => {
    if (role === "teacher") setTeacher(true);
    else if (role === "student") setTeacher(false);
    else setTeacher(null);
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching");
  };
  return (
    <div className={styles.body}>
      <div className={`${styles.showHead} ${styles.search_head}`}>
        <div>Search By</div>
        <div>
          <select name="choice">
            <option value="firstname">First Name</option>
            <option value="lastname">Last Name</option>
            <option value="rollno">Roll no</option>
          </select>
        </div>
        <form onSubmit={handleSubmit} className={styles.search_field}>
          <input type="search" name="search" placeholder="Search HERE" />
        </form>
        <div className={styles.search_icon} onClick={handleSubmit}>
          <SearchRounded />
        </div>
      </div>
      {isTeacher ? (
        <TeacherTable profile={user} />
      ) : (
        <StudentTable profile={user} />
      )}
    </div>
  );
};

export default SearchForm;
