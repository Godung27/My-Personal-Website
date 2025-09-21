import { experienceItems } from "../experienceItems.js";
import classes from "./Card.module.css"

export default function Card() {
  return (
    <>
      {
        experienceItems.map(({ title, code, photo, description }) => {
          return (
            <div
              key={title}
              className={classes.experienceItem}
            >
              <img className={classes.photoExperience} src={photo} alt={title} />
              <h4 className={classes.title}>{title}</h4>
              <h6 className={classes.code}>{code}</h6>
              <p className={classes.description}>{description}</p>
            </div>
          );
        })
      }
    </>
  );
}