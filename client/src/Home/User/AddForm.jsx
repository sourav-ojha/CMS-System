import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./studentPage.module.css";
const AddForm = () => {
  const initialState = {
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
  const {role} = useParams();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.showHead} ${styles.form_head}`}>
        <div>Register {role}</div>
      </div>
      <div className={`${styles.showHead} ${styles.empty}`}></div>

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
