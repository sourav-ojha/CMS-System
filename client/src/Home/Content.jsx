import React, { useEffect, useState } from "react";
import { SearchOutlined, Person } from "@material-ui/icons";
import Calendar from "react-calendar";

import stu_attend from './images/attendance.png'
import teacher_attend from './images/teacher_attend.png'
import stu from './images/student.png'

import "react-calendar/dist/Calendar.css";
import styles from "./test.module.css";

const Content = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [time, setTime] = useState(0);

  const curr = new Date();
  const hr = curr.getHours();
  const min = curr.getMinutes();
  const sec = curr.getSeconds();

  setTimeout(() => {
    setTime(`${curr.getHours()}:${curr.getMinutes()}:${curr.getSeconds()}`);
  }, 1000);

  return (
    <>
      <div className={styles.contentBody}>
        <div className={styles.content_head}>
          <div className={styles.search}>
            {/* <SearchOutlined /> */}
          </div>
          <div className={styles.greeting}>Hi! Sourav</div>
          <div></div>
          <div>{time ? time : "loading ..."}</div>
        </div>

        <div className={styles.content_body}>
          <div></div>
          <div className={styles.content_cards}>
            <div className={styles.content_cardBox}>
              <div className={`${styles.card} ${styles.bg_card_main}`}>
                <div className={styles.content_circle}>
                  <img src={stu} alt="h" />
                </div>
                <div className={styles.content_card_value}>
                  <div>2345</div>
                  <div className={styles.small}>Total Students</div>
                </div>
              </div>
            </div>

            <div className={styles.content_cardBox}>
              <div className={styles.card}>
                <div className={styles.content_circle}>
                  <Person fontSize="large"/>
                </div>
                <div className={styles.content_card_value}>
                  <div>2345</div>
                  <div className={styles.small}>Total Teachers</div>
                </div>
              </div>
            </div>

            <div className={styles.content_cardBox}>
              <div className={styles.card}>
                <div className={styles.content_circle}>
                  <img src={teacher_attend} alt="h" />
                </div>
                <div className={styles.content_card_value}>
                  <div>2345</div>
                  <div className={styles.small}>Teachers Present</div>
                </div>
              </div>
            </div>

            <div className={styles.content_cardBox}>
              <div className={styles.card}>
                <div className={styles.content_circle}>
                  <img src={stu_attend} alt="h" />
                </div>
                <div className={styles.content_card_value}>
                  <div>2345</div>
                  <div className={styles.small}>Students Present</div>
                </div>
              </div>
            </div>
          </div>
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
