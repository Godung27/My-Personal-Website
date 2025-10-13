import classes from "./Modal.module.css"

import GithubIcon from "../../../../assets/icon/Contact/Github_icon.svg"

export default function Modal({ item, onCloseModal }) {
  const { title, code, photo, description, github } = item;

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
          <div className={classes.titleArea}>
            <h4 className={classes.title}>{title}</h4>
            <a
              className={classes.iconArea}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img className={classes.icon} src={GithubIcon} alt="GitHub" />
            </a>
          </div>
          <h6 className={classes.code}>{code}</h6>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}