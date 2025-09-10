import classes from "./SideBar.module.css"

export default function SideBar({ isOpenSideBar }) {
  const menuItem = [
    { path: "/home", label: "Home" },
    { path: "/page", label: "Page" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${classes["side-bar"]} ${isOpenSideBar ? classes.open : undefined}`}
    >
      <ul className={classes.menu}>
        {menuItem.map(({ path, label }) => (
          <li key={path}>
            <a href={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}