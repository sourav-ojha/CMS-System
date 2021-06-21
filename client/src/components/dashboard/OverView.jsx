import React from "react";
import Header from "./Header";
import styles from "./dashboard.module.css";
const OverView = () => {
  return (
    <div className={styles.profile}>
      <Header title="OverView" />
      <div className={styles.box}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div></div>
            <div className={styles.cardName}>Attendence</div>
            <div className={styles.cardValue}>70</div>
          </div>
          <div className={styles.card}>
            <div></div>
            <div className={styles.cardName}>Percentage</div>
            <div className={styles.cardValue}>90</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
