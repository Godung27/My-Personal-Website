import { useState } from "react";

import classes from "./BtnHamburger.module.css"

export default function BtnHamburger() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleOpenSideBar = function () {
    setIsOpenSideBar(pre => !pre);
  }

  return (
    <button
      className={`${classes.btnHamburger} ${isOpenSideBar ? classes.open : ""}`}
      onClick={handleOpenSideBar}
    >
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
    </button>
  );
}