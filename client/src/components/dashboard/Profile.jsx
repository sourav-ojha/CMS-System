import React, { useEffect, useState } from "react";
import Header from "./Header";
import style from "./dashboard.module.css";
import { getCurrentUser } from "../../services/auth.service";
const Profile = () => {
  const currentUser = getCurrentUser();
  const [profile, setProfile] = useState({
    name: currentUser.firstname,
    email: currentUser.email,
    phno: currentUser.phno,
    course: currentUser.course,
    rollno: currentUser.rollno,
  });

  const [isEdit, setisEdit] = useState(false);

  const handleCancel = () => {
    setisEdit(true);
    console.log(isEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
    });
    console.log("submit clicked");
  };

  const handleEdit = () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = false;
    });
    setisEdit(false);
    console.log(isEdit);
  };

  return (
    <div className={style.profile}>
      <Header title="Profile" />
      <div className={style.box}>
        <form className={style.details}>
          <div className={style.avatar}>Avatar</div>
          <div className={style.pb}>
            <div className={style.pbg}>
              <div className={style.pbgl}>Name</div>
              <div className={style.pbgi}>
                : {""}
                <input type="text" name="name" value={profile.name} />
              </div>
            </div>

            <div className={style.pbg}>
              <div className={style.pbgl}>Email ID</div>
              <div className={style.pbgi}>
                : {""}
                <input type="text" name="email" value={profile.email} />
              </div>
            </div>

            <div className={style.pbg}>
              <div className={style.pbgl}>Phone No</div>
              <div className={style.pbgi}>
                : {""}
                <input type="text" name="phno" value={profile.phno} />
              </div>
            </div>

            <div className={style.pbg}>
              <div className={style.pbgl}>Course</div>
              <div className={style.pbgi}>
                : {""}
                <input type="text" name="course" value={profile.course} />
              </div>
            </div>

            <div className={style.pbg}>
              <div className={style.pbgl}>Roll no</div>
              <div className={style.pbgi}>
                : {""}
                <input type="text" name="rollno" value={profile.rollno} />
              </div>
            </div>
          </div>
          {isEdit ? (
            <button className={style.edit_btn} onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <>
              <button className={style.edit_btn} onClick={handleSubmit}>
                Update
              </button>
              <button
                className={style.edit_btn}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
