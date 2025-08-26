import classes from "./BtnHamburger.module.css"

export default function BtnHamburger({ isOpenSideBar, onToggle }) {
  return (
    <button
      className={`
      ${classes.btnHamburger} ${isOpenSideBar ? classes.open : undefined}
      `}
      onClick={onToggle}
    >
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
    </button>
  );
}