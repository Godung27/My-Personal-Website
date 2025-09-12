import classes from "./AreaSection.module.css"

export default function AreaSection({ theme = "light", children }) {
  return (
    <section className={`${classes.areaSection} ${classes[theme]}`}>
      <div className={classes.areaText}>
        {children}
      </div>
    </section>
  );
}