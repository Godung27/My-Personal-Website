import classes from "./HeroSlider.module.css"
import PersonImg from "../../assets/Person.jpg"
import HeroImg from "../../assets/heroImg.jpg"

export default function HeroSlider() {
  const imgs = [PersonImg, HeroImg];

  return (
    <div className={classes["bg-slider"]}>
      <img className={classes["img-hero"]} src={PersonImg} alt="Person" />
      <img className={classes["img-hero"]} src={HeroImg} alt="HeroImg" />
    </div>
  );
}