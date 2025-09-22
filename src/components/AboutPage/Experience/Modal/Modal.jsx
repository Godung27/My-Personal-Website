import classes from "./Modal.module.css"

export default function Modal({ item, onCloseModal }) {
  const { title, code, photo, description } = item;

  return (
    <>
      <div
        className={classes.overlay}
        onClick={onCloseModal}
      />
      <div
        className={classes.modalExperience}
        onClick={onCloseModal}
      >
        <img className={classes.photoExperience} src={photo} alt={title} />
        <h4 className={classes.title}>{title}</h4>
        <h6 className={classes.code}>{code}</h6>
        <p className={classes.description}>{description}</p>
      </div>
    </>
  );
}