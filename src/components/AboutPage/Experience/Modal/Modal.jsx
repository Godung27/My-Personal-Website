import classes from "./Modal.module.css"

export default function Modal({ item, onCloseModal }) {
  const { title, code, photo, description } = item;

  return (
    <div
      className={classes.overlay}
      onClick={(e) => {
        e.currentTarget === e.target && onCloseModal();
      }}
    >
      <div
        className={classes.modalExperience}
      >
        <button className={classes.btnClose} onClick={onCloseModal}>
          &times;
        </button>
        <div className={classes["bg-photo"]}>
          <img className={classes.photoExperience} src={photo} alt={title} />
        </div>
        <div className={classes.textLayout}>
          <h4 className={classes.title}>{title}</h4>
          <h6 className={classes.code}>{code}</h6>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}