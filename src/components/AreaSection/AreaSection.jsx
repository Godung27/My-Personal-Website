import classes from "./AreaSection.module.css"

export default function AreaSection({ theme = "light", id, children }) {
  return (
    <section id={id} className={`${classes.areaSection} ${classes[theme]}`}>
      <div className={classes.areaText}>
        {children}
      </div>
    </section>
  );
}