import classes from "./Experience.module.css"

export default function Experience() {
  const experienceItems = [
    {
      title: "tt",
      photo: "",
      description: "",
    },
    {
      title: "aa",
      photo: "",
      description: "",
    },
    {
      title: "gg",
      photo: "",
      description: "",
    },
  ]

  return (
    <div>
      <h3 className={classes.topic}>Experience</h3>
      <div className={classes["experience-area"]}>
        {experienceItems.map(({ title, photo, description }) => {
          return (
            <div
              key={title}
              className={classes.experienceItems}
            >
              <div className={classes.box}>
                <img className={classes.photoExperience} src={photo} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}