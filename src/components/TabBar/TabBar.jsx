import { useState, useRef, useEffect } from "react";

import BtnHamburger from "../BtnHamburger/BtnHamburger";
import SideBar from "../SideBar/SideBar.jsx";
import classes from "./TabBar.module.css";

export default function TabBar() {
  const wasScrolledRef = useRef(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const menuItem = [
    { path: "/home", label: "Home" },
    { path: "/page", label: "Page" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScrolledWebsite = function () {
      const isTopPage = scrollY === 0;
      const wasScrolled = wasScrolledRef.current;

      if (isTopPage) {
        setScrolled(false);
        wasScrolledRef.current = false;
      } else if (!isTopPage && wasScrolled === false) {
        setScrolled(true);
        wasScrolledRef.current = true;
      }
    }

    window.addEventListener("scroll", handleScrolledWebsite);
    return (() => window.removeEventListener("scroll", handleScrolledWebsite));
  }, []);

  const handleActiveTab = function (path) {
    setActiveTab(path);
  }

  const handleOpenSidebar = function () {
    setIsOpenSideBar(pre => !pre);
  }

  return (
    <nav
      className={`${classes["tab-bar"]} ${scrolled ? classes.scrolled : undefined}`}
    >
      <SideBar isOpenSideBar={isOpenSideBar} />
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
      <BtnHamburger
        isOpenSideBar={isOpenSideBar}
        onToggle={handleOpenSidebar}
      />
    </nav>
  );
}


