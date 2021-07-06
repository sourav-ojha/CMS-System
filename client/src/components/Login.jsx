import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import style from "./login.module.css";
import { signIn, signUp } from "../services/auth.service";

const Home = () => {
  const initiaState = {
    firstname: "",
    lastname: "",
    phno: "",
    course: "",
    rollno: "",
    email: "",
    role: "student",
    password: "",
    cpassword: "",
  };
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState(initiaState);

  const [isSignUp, setIsSignUp] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setData(initiaState);
  };

  // const afterAuth = (role, history) => {
  //   if (role === "admin") history.push("/d");
  //   else if (role === "teacher") history.push("/dashboard");
  //   else if (role === "student") history.push("/dashboard");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      signUp(data);
    } else {
      signIn(data);
    }
    window.location.reload();
    console.log("Login.jsx", data);
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.subhead}>
          <div className={style.head}>
            <button
              className={
                !isSignUp ? `${style.btn_head} ${style.active}` : style.btn_head
              }
              onClick={() => {
                setIsSignUp(false);
                clear();
              }}
            >
              SIGN IN
            </button>
            <button
              className={
                isSignUp ? `${style.btn_head} ${style.active}` : style.btn_head
              }
              onClick={() => {
                setIsSignUp(true);
                clear();
              }}
            >
              SIGN UP
            </button>
          </div>
          {/* <div className={style.role}>
            {!isSignUp && (
              <>
                <p>Sign In As</p>
                <select
                  name="role"
                  id="role"
                  value={data.role}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </>
            )}
          </div> */}
        </div>
        <div
          className={
            isSignUp
              ? `${style.body_container} ${style.big_cont}`
              : `${style.body_container} ${style.small_cont}`
          }
        >
          <div
            className={
              !isSignUp ? `${style.input_field}` : `${style.input_field1}`
            }
          >
            {isSignUp && (
              <>
                <div className={style.half}>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={data.firstname}
                      onChange={handleChange}
                      placeholder=" First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={data.lastname}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className={style.half}>
                  <div>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      value={data.course}
                      onChange={handleChange}
                      placeholder=" Course"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="rollno"
                      id="rollno"
                      value={data.rollno}
                      onChange={handleChange}
                      placeholder="Roll no"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className={style.full}
                    type="text"
                    name="phno"
                    id="phno"
                    value={data.phno}
                    onChange={handleChange}
                    placeholder="Enter your Phone no"
                  />
                </div>
              </>
            )}
            <div>
              <input
                className={style.full}
                type="text"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your Email ID"
              />
            </div>
            <div className={isSignUp && style.half}>
              <div>
                <input
                  className={!isSignUp && style.full}
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div>
                {isSignUp && (
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={data.cpassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                )}
              </div>
            </div>
            <div className="btn">
              <button
                type="submit"
                onClick={handleSubmit}
                className={style.submit}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
