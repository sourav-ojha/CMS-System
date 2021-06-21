import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Students from "./student/Students";
import AddStudent from "./student/AddStudent";
import Teachers from "./teacher/Teachers";
import AddTeacher from "./teacher/AddTeacher";
import Loading from "../Loading";

import { logOut } from "../../services/auth.service";

import styles from "./admin.module.css";
import { fetch, sortByDept } from "../../action/admin";

function Admin() {
  const [currentId, setCurrentId] = useState(null);
  const [toogle, settoogle] = useState(true);
  const [dept, setDept] = useState("ALL");
  const history = useHistory();

  // const Data = useSelector((state) => state.group);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toogle) {
      dispatch(fetch("teacher"));
    } else {
      dispatch(fetch("student"));
      dispatch(sortByDept(dept));
    }

    console.log("dept : ", dept);
  }, [toogle, dispatch, dept]);

  const handleLogout = () => {
    logOut();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>DashBoard</div>
        <div className={logOut} onClick={handleLogout}>
          LogOut
        </div>
      </div>

      <div className={styles.bar}>
        <div
          className={
            toogle ? `${styles.selected} ${styles.toogle}` : `${styles.toogle}`
          }
          onClick={() => {
            settoogle(true);
            setCurrentId(null);
          }}
        >
          teacher
        </div>
        <div
          className={
            toogle ? `${styles.toogle}` : `${styles.selected} ${styles.toogle}`
          }
          onClick={() => {
            settoogle(false);
            setCurrentId(null);
          }}
        >
          Student
        </div>
      </div>
      {!toogle ? (
        <div className={styles.dept}>
          Sort By Department :
          <select
            name="dept"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            id="dept"
          >
            <option value="ALL">ALL</option>
            <option value="BCA">BCA</option>
            <option value="BSc">BSc</option>
          </select>
        </div>
      ) : null}
      <div className={styles.content}>
        {toogle ? (
          <>
            <Teachers setCurrentId={setCurrentId} />
            <AddTeacher currentId={currentId} setCurrentId={setCurrentId} />
          </>
        ) : (
          <>
            <Students setCurrentId={setCurrentId} />
            <AddStudent currentId={currentId} setCurrentId={setCurrentId} />
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;
