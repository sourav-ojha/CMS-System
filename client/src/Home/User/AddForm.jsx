import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createUser } from "../../action/admin";
import styles from "./studentPage.module.css";
const AddForm = () => {
  const { Role } = useParams();
  console.log(Role, "======role is <=");
  const initialState = {
    firstname: "",
    lastname: "",
    phno: "",
    course: "",
    rollno: "",
    email: "",
    role: Role,
    password: "",
    cpassword: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    setFormData(initialState);
  }, [Role]);

  const [User_Register_status, setUser_Register_status] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // role: Role,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("before send", formData);
    try {
      dispatch(createUser(formData));
      setUser_Register_status(true);
      setUser_Register_status(true);
    } catch (error) {
      console.log(error);
    }

    setFormData(initialState);
  };

  useEffect(() => {
    if (User_Register_status) {
      setTimeout(() => {
        setUser_Register_status(false);
      }, 5000);
    }
  }, [User_Register_status]);

  return (
    <div className={styles.body}>
      <div className={`${styles.showHead} ${styles.form_head}`}>
        <div>Register {Role}</div>
      </div>
      <div className={`${styles.showHead} ${styles.empty} `}>
        {User_Register_status && (
          <div className={styles.show_response}> User Registered success </div>
        )}
      </div>

      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.body_container}>
            <div className={`${styles.input_field}`}>
              <div className={styles.half}>
                <div>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder=" First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className={styles.half}>
                <div>
                  <input
                    type="text"
                    name="course"
                    id="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder=" Course"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="rollno"
                    id="rollno"
                    value={formData.rollno}
                    onChange={handleChange}
                    placeholder="Roll no"
                  />
                </div>
              </div>
              <div>
                <input
                  className={styles.full}
                  type="text"
                  name="phno"
                  id="phno"
                  value={formData.phno}
                  onChange={handleChange}
                  placeholder="Enter your Phone no"
                />
              </div>

              <div>
                <input
                  className={styles.full}
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email ID"
                />
              </div>
              <div className={styles.half}>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={formData.cpassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="btn">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.submit}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
