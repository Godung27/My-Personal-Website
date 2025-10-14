import { menuItems } from "../menuItems.js"
import classes from "./SideBar.module.css"

export default function SideBar({ isOpenSideBar }) {
  return (
    <nav
      className={`${classes["side-bar"]} ${isOpenSideBar ? classes.open : ""}`}
    >
      <ul className={classes.menu}>
        {menuItems.map(({ path, label, subMenu }) => (
          <li key={path}>
            <a
              href={path}
            >
              {label}
            </a>
            {subMenu && (
              <ul>
                {subMenu.map(({ path: subPath, label: subLabel }) => (
                  <li key={subPath}>
                    <a href={subPath}>
                      {subLabel}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}