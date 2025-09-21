import Card from "./Card/Card.jsx";
import classes from "./Experience.module.css"

export default function Experience() {
  return (
    <div>
      <h3 className={classes.topic}>Experience</h3>
      <div className={classes["experience-area"]}>
        <Card />
      </div>
    </div>
  );
}