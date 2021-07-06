import React, { useEffect, useState } from "react";
import {
  LabelRounded,
  PhoneAndroidRounded,
  ImportContactsRounded,
  EmailRounded,
} from "@material-ui/icons";

import styles from "./test.module.css";
import { useSelector } from "react-redux";
import { useAuthValue } from "../helper/AuthProvider";

const Profile = () => {
  const loggedUser = useAuthValue();
  console.log("logged user : ", loggedUser);
  
  const [currentUser, setCurrentUser] = useState(loggedUser);
  const current = useSelector((state) => state.currentProfile);
  console.log('current user in PROFILE : ', current);

  useEffect(() => {
    if(current)
    setCurrentUser(current);
    else
    setCurrentUser(loggedUser);
  }, [current, loggedUser]);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav_head}>
          <div className={styles.head_content}>Profile</div>
        </div>

        <div className={styles.profile_Avatar}>
          <div className={styles.avatar}></div>
          <div>{currentUser?.name}</div>
        </div>

        <div className={styles.profile_Body}>
          <div></div>
          <div className={styles.bottom_border}>Details</div>
          <div className={styles.profile_menu}>
            <div>
              <PhoneAndroidRounded />
            </div>
            <div>{currentUser?.phno}</div>
          </div>

          <div className={styles.profile_menu}>
            <div>
              <EmailRounded />
            </div>
            <div>{currentUser?.email}</div>
          </div>

          <div className={styles.profile_menu}>
            <div>
              <ImportContactsRounded />{" "}
            </div>
            <div>{currentUser?.course}</div>
          </div>

          <div className={styles.profile_menu}>
            <div>
              {" "}
              <LabelRounded />{" "}
            </div>
            <div>{currentUser?.rollno}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
