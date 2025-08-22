import classes from "./Header.module.css"

import PersonImg from "../../assets/Person.jpg"

export default function Header() {
  return (
    <header>
      <img className={classes.img} src={PersonImg} alt="Person" />
    </header>
  );
}