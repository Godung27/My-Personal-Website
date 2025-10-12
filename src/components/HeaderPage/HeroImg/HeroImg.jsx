import WelcomeText from "../WelcomeText/WelcomeText.jsx";

import classes from "./HeroImg.module.css"
import ParnuvichImg from "../../../assets/image/HeroImg/2E1EDA31-BE34-4265-BE70-A7CEC87ECF3B copy.jpeg"

export default function HeroImg() {
  return (
    <div className={classes["bg-img"]}>
      <img className={classes["img-hero"]} src={ParnuvichImg} alt="ParnuvichImg" />
      <div className={classes.overlay} />
      <WelcomeText />
    </div>
  );
}