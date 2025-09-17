import { menuItems } from "../menuItems.js"
import classes from "./SideBar.module.css"

export default function SideBar({ isOpenSideBar }) {
  return (
    <nav
      className={`${classes["side-bar"]} ${isOpenSideBar ? classes.open : undefined}`}
    >
      <ul className={classes.menu}>
        {menuItems.map(({ path, label }) => (
          <li key={path}>
            <a
              href={path}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}