import { SearchRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetch, search } from "../../action/admin";
import styles from "./studentPage.module.css";
import StudentTable from "./StudentTable";
import TeacherTable from "./TeacherTable";

const SearchForm = () => {
  const dispatch = useDispatch();
  const { Role } = useParams();
  const user = useSelector((state) => state.group);
  const [searchData, setSearchData] = useState("");
  const [isTeacher, setTeacher] = useState(false);

  useEffect(() => {
    if (Role === "teacher") {
      setTeacher(true);
    } else if (Role === "student") setTeacher(false);
    else setTeacher(null);
    dispatch(fetch(Role));
  }, [Role]);

  useEffect(() => {
    dispatch(fetch(Role));
    dispatch(search(searchData, Role));
  }, [searchData, Role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching");
    dispatch(search(searchData, Role));
  };
  return (
    <div className={styles.body}>
      <div className={`${styles.showHead} ${styles.search_head}`}>
        <div></div>
        <div></div>
        <form onSubmit={handleSubmit} className={styles.search_field}>
          <input
            type="search"
            name="search"
            placeholder="Search HERE"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </form>
        <div className={styles.search_icon} onClick={handleSubmit}>
          <SearchRounded />
        </div>
      </div>

      {user &&
        user
          .sort((a, b) => a.firstname.localeCompare(b.firstname))
          .map((u) =>
            isTeacher ? (
              <TeacherTable profile={u} />
            ) : (
              <StudentTable profile={u} />
            )
          )}
    </div>
  );
};

export default SearchForm;
