import classes from "./Contact.module.css"

export default function Contact() {
  return (
    <div className={classes["area-contact"]}>
      <h2>Contact</h2>
      <div className={classes.row}>
        <div className={classes.info}>
          <p>Email</p>
          <a href="mailto:parnuvich.l@gmail.com">parnuvich.l@gmail.com</a>
          <p>Github</p>
          <a href="https://github.com/Godung27">Godung27</a>
        </div>
        <div className={classes.info}>
          <p>Call</p>
          <a href="tel:092-120-2379">092-120-2379</a>
          <p>Visit</p>
          <a href="https://maps.app.goo.gl/TNCn7Bnhzhhhm3r3A">
            47/1 Moo.4 Khlong Nueng, Khlong Luang, Pathum Thani 12120
          </a>
        </div>
      </div>
    </div>
  );
}