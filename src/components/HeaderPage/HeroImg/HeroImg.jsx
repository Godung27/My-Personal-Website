import classes from "./HeroImg.module.css"
import ParnuvichImg from "../../../assets/image/HeroSlider/ParnuvichImg.png"

export default function HeroImg() {
  return (
    <div className={classes["bg-slider"]}>
      <div className={classes.overlay} />
      <img className={classes["img-hero"]} src={ParnuvichImg} alt="ParnuvichImg" />
    </div>
  );
}