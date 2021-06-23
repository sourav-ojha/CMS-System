import React from "react";
import { LabelRounded, PhoneAndroidRounded, ImportContactsRounded, EmailRounded } from "@material-ui/icons";

import styles from "./test.module.css";

const Profile = () => {
  return (
      <>
    <div className={styles.navbar}>
      <div className={styles.nav_head}>
        <div className={styles.head_content}>Profile</div>
      </div>

      <div className={styles.profile_Avatar}>
        <div className={styles.avatar}></div>
        <div>Name HERE</div>
        
      </div>

      <div className={styles.profile_Body}>
          <div></div>
        <div className={styles.bottom_border}>Details</div>
        <div className={styles.profile_menu}>
          <div><PhoneAndroidRounded /></div>
          <div>Phone No</div>
        </div>

        <div className={styles.profile_menu}>
          <div><EmailRounded /></div>
         <div>Email ID 

         </div>
        </div>

        <div className={styles.profile_menu}>
          <div><ImportContactsRounded /> </div>
          <div>Course</div>
        </div>

        <div className={styles.profile_menu}>
          <div> <LabelRounded /> </div>
          <div>Roll no</div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Profile;
