import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudent,
  deleteStudent,
  updateStudent,
} from "../../action/admin";

function Addmember({ currentId, setCurrentId }) {
  const [profile, setProfile] = useState({
    username: "",
    fullname: "",
    phno: "",
    email: "",
    course: "",
    password: "",
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
      dispatch(updateStudent(currentId, profile));
    } else {
      dispatch(createStudent(profile));
    }
    clear();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteStudent(currentId));
  };

  const clear = () => {
    setCurrentId(null);
    setProfile({
      username: "",
      fullname: "",
      phno: "",
      email: "",
      course: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={profile.username}
          placeholder="Enter Your name"
        />
        <input
          type="text"
          name="fullname"
          id="fullname"
          onChange={handleChange}
          value={profile.fullname}
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
        <button type="submit">Add</button>
        <div>
          {currentId ? <button onClick={handleDelete}>Delete</button> : null}
          <button onClick={clear}>Clear</button>
        </div>
      </form>
    </>
  );
}

export default Addmember;
