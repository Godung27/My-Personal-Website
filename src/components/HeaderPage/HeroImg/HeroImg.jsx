import WelcomeText from "../WelcomeText/WelcomeText.jsx";

import classes from "./HeroImg.module.css"
import ParnuvichImg from "../../../assets/image/HeroImg/ParnuvichImg.jpeg"

export default function HeroImg() {
  return (
    <div className={classes["bg-img"]}>
      <img className={classes["img-hero"]} src={ParnuvichImg} alt="ParnuvichImg" />
      <div className={classes.overlay} />
      <WelcomeText />
    </div>
  );
}