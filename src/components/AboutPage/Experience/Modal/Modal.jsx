import classes from "./Modal.module.css"

export default function Modal({ item }) {
  const { title, code, photo, description } = item;

  return (
    <>
      <div
        className={classes.modalExperience}
      >
        <img className={classes.photoExperience} src={photo} alt={title} />
        <h4 className={classes.title}>{title}</h4>
        <h6 className={classes.code}>{code}</h6>
        <p className={classes.description}>{description}</p>
      </div>
    </>
  );
}