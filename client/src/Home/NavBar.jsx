import React, { useState } from "react";
import {
  AddBoxRounded,
  DashboardRounded,
  FeedbackRounded,
  PersonRounded,
  SearchRounded,
  SupervisorAccountRounded,
} from "@material-ui/icons";
import { useRouteMatch, Link } from "react-router-dom";
import styles from "./test.module.css";

const NavBar = () => {
  const { path, url } = useRouteMatch();

  const [showStudentMenu, setShowStudentMenu] = useState(false);
  const handleStudentMenu = () => {
    setShowStudentMenu((prevState) => !prevState);
  };
  const [showTeacherMenu, setShowTeacherMenu] = useState(false);
  const handleTeacherMenu = () => {
    setShowTeacherMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav_head}>
          <div className={styles.head_content}>C-M-S</div>
        </div>
        <div className={styles.empty}></div>
        <div className={styles.nav_menu}>
          <Link to={`${url}`} className={styles.nav_menu_item}>
            <div className={styles.item_element}>
              <DashboardRounded />
            </div>
            <div className={styles.item_element}>DashBoard</div>
          </Link>

          <div className={styles.nav_menu_item} onClick={handleStudentMenu}>
            <div className={styles.item_element}>
              <PersonRounded />
            </div>
            <div className={styles.item_element}>Students</div>
          </div>

          {showStudentMenu && (
            <div className={styles.nav_menu_subitem}>
              <Link
                to={`${url}/show/student`}
                className={styles.nav_menu_item}
              >
                <div className={styles.item_element}>
                  {" "}
                  <SupervisorAccountRounded />{" "}
                </div>
                <div className={styles.item_element}>Show ALL</div>
              </Link>
              <Link to={`${url}/add/student`} className={styles.nav_menu_item}>
                <div  className={styles.item_element}>
                  {" "}
                  <AddBoxRounded />{" "}
                </div>
                <div className={styles.item_element}>ADD Student</div>
              </Link>
              <Link to={`${url}/search/student`} className={styles.nav_menu_item}>
                <div className={styles.item_element}>
                  <SearchRounded />{" "}
                </div>
                <div className={styles.item_element}>Search Student</div>
              </Link>
            </div>
          )}

          <div className={styles.nav_menu_item}>
            <div className={styles.item_element}>
              <PersonRounded />
            </div>
            <div className={styles.item_element} onClick={handleTeacherMenu}>
              Teachers
            </div>
          </div>

          {showTeacherMenu && (
            <div className={styles.nav_menu_subitem}>
              <Link to={`${url}/show/teacher`} className={styles.nav_menu_item}>
                <div className={styles.item_element}>
                  <SupervisorAccountRounded />{" "}
                </div>
                <div className={styles.item_element}>Show ALL</div>
              </Link>
              <Link to={`${url}/add/teacher`} className={styles.nav_menu_item}>
                <div className={styles.item_element}>
                  {" "}
                  <AddBoxRounded />
                </div>
                <div className={styles.item_element}>ADD Teacher</div>
              </Link>
              <Link to={`${url}/search/teacher`} className={styles.nav_menu_item}>
                <div className={styles.item_element}>
                  <SearchRounded />{" "}
                </div>
                <div className={styles.item_element}>Search Teacher</div>
              </Link>
            </div>
          )}

          <div className={styles.nav_menu_item}>
            <div className={styles.item_element}>
              <FeedbackRounded />
            </div>
            <div className={styles.item_element}>FeedBack</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
