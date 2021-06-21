import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthValue } from "../../helper/AuthProvider";
import { logOut } from "../../services/auth.service";
import style from "./dashboard.module.css";

const Header = (props) => {
  const history = useHistory();
  const user = useAuthValue();

  const [logoutSwitch, setLogoutSwitch] = useState(false);
  useEffect(() => {
    if (logoutSwitch) setTimeout(() => setLogoutSwitch(false), 5000);
  }, [logoutSwitch]);

  const handleLogout = () => {
    logOut();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className={style.head}>
      <div className={style.left}> {props.title} </div>
      <div className={style.right}>
        {!logoutSwitch ? (
          <div
            className={style.displayName}
            onClick={() => setLogoutSwitch(true)}
          >
            {user?.firstname}
          </div>
        ) : (
          <button className={style.logout} onClick={handleLogout}>
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
