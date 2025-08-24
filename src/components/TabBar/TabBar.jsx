import { useState, useEffect } from "react";

import BtnHamburger from "../BtnHamburger/BtnHamburger";
import classes from "./TabBar.module.css";

export default function TabBar() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScrolledWebsite = function () {
      if (scrollY === 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScrolledWebsite);

    return (() => window.removeEventListener("scroll", handleScrolledWebsite));
  }, []);

  return (
    <nav
      className={`${classes["tab-bar"]} ${scrolled ? undefined : classes.scrolled}`}
    >
      <div className={classes.logo}>Godung</div>
      <ul className={classes.menu}>
        <li><a href="/home">Home</a></li>
        <li><a href="/page">Page</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <BtnHamburger />
      </ul>
    </nav>
  );
}


