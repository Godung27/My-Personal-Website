import classes from "./Card.module.css"

export default function Card({ item, onOpenModal }) {
  const { title, code, photo } = item;

  return (
    <>
      <div
        className={classes.cardExperience}
        onClick={onOpenModal}
      >
        <img className={classes.photoExperience} src={photo} alt={title} />
        <h4 className={classes.title}>{title}</h4>
        <h6 className={classes.code}>{code}</h6>
      </div>
    </>
  );
}