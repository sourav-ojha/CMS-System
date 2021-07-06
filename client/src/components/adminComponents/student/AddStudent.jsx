import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, updateUser } from "../../../action/admin";
import styles from "../admin.module.css";

function Addmember({ currentId, setCurrentId }) {
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    phno: "",
    email: "",
    course: "",
    password: "",
    role: "student",
  });
  const dispatch = useDispatch();
  const details = useSelector((state) =>
    currentId ? state.group.find((t) => t._id === currentId) : null
  );

  useEffect(() => {
    if (details) {
      setProfile(details);
    }
  }, [details]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateUser(currentId, profile));
    } else {
      console.log("profile : ", profile);
      dispatch(createUser(profile));
    }
    clear();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUser(currentId));
  };

  const clear = () => {
    setCurrentId(null);
    setProfile({
      firstname: "",
      lastname: "",
      phno: "",
      email: "",
      course: "",
      password: "",
      role: "student",
    });
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    console.log("profile", profile);
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleChange}
          value={profile.firstname}
          placeholder="Enter Your name"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleChange}
          value={profile.lastname}
          placeholder="Enter your Full Name"
        />
        <input
          type="tel"
          name="phno"
          id="phno"
          onChange={handleChange}
          value={profile.phno}
          placeholder="phone number"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={profile.email}
          placeholder="Email ID"
        />
        <input
          type="text"
          name="course"
          id="course"
          onChange={handleChange}
          value={profile.course}
          placeholder="Course"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={profile.password}
          placeholder="Create Passsword"
        />
        <button className={styles.btn} type="submit">
          {currentId ? "Update" : "Add"}
        </button>
        <div>
          {currentId ? (
            <>
              <button className={styles.d} onClick={handleDelete}>
                Delete
              </button>
              <button className={styles.btn} onClick={clear}>
                Cancel
              </button>{" "}
            </>
          ) : (
            <button className={styles.btn} onClick={clear}>
              Clear
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default Addmember;
