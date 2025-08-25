import { useState, useRef, useEffect } from "react";

import BtnHamburger from "../BtnHamburger/BtnHamburger";
import classes from "./TabBar.module.css";

export default function TabBar() {
  const preScrolledRef = useRef(true);
  const [scrolled, setScrolled] = useState(true);
  const [activeTab, setActiveTab] = useState("/home")

  const menuItem = [
    { path: "/home", label: "Home" },
    { path: "/page", label: "Page" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScrolledWebsite = function () {
      const isTopPage = scrollY === 0;
      const wasScrolled = preScrolledRef.current;

      if (wasScrolled !== isTopPage) {
        setScrolled(isTopPage);
        preScrolledRef.current = isTopPage;
      }
    }

    window.addEventListener("scroll", handleScrolledWebsite);
    return (() => window.removeEventListener("scroll", handleScrolledWebsite));
  }, []);

  const handleActiveTab = function (path) {
    setActiveTab(path);
  }

  return (
    <nav
      className={`${classes["tab-bar"]} ${scrolled ? undefined : classes.scrolled}`}
    >
      <div className={classes.logo}>Godung</div>
      <ul className={classes.menu}>
        {menuItem.map(({ path, label }) => (
          <li key={path}>
            <a
              href={path}
              onClick={() => handleActiveTab(path)}
              className={activeTab === path ? classes.active : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <BtnHamburger />
    </nav>
  );
}


