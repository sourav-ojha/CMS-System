import React, { useState, useEffect } from "react";
import Students from "./student/Students";
import "./style.css";
import { useDispatch } from "react-redux";
import AddTeacher from "./teacher/AddTeacher";
import AddStudent from "./student/AddStudent";
import Teachers from "./teacher/Teachers";
import { fetchStudents, fetchTeachers, sortByDept } from "../action/admin";

function Admin() {
  const [currentId, setCurrentId] = useState(null);
  const [toogle, settoogle] = useState(true);
  const [dept, setDept] = useState("ALL");
  // const Data = useSelector((state) => state.group);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toogle) {
      dispatch(fetchTeachers());
    } else {
      dispatch(fetchStudents());
      dispatch(sortByDept(dept));
    }

    console.log("dept : ", dept);
  }, [toogle, dispatch, dept]);

  // useEffect(() => {
  // }, [dept])

  return (
    <div className="container">
      <div className="header">DashBoard</div>
      <div className="bar">
        <div
          className={toogle ? "selected toogle" : "toogle"}
          onClick={() => {
            settoogle(true);
            setCurrentId(null);
          }}
        >
          teacher
        </div>
        <div
          className={toogle ? "toogle" : "selected toogle"}
          onClick={() => {
            settoogle(false);
            setCurrentId(null);
          }}
        >
          Student
        </div>
      </div>
      {!toogle ? (
        <div className="dept">
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
      <div className="content">
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
