import classes from "./AreaSection.module.css"

export default function AreaSection({ theme = "light", topic = "mainSection", id, children }) {
  return (
    <section
      id={id}
      className={`${classes[topic]} ${classes[theme]}`}
    >
      <div className={classes.areaText}>
        {children}
      </div>
    </section>
  );
}