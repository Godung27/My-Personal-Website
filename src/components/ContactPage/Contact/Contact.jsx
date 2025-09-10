import IconContact from "../IconContact/IconContact.jsx";
import classes from "./Contact.module.css"

export default function Contact() {
  return (
    <div className="area">
      <h2>Contact</h2>
      <h3>Parnuvich Limtongsittikun</h3>
      <div className={classes.row}>
        <div className={classes.info}>
          <p>Email</p>
          <a href="mailto:parnuvich.l@gmail.com">parnuvich.l@gmail.com</a>
          <p>Call</p>
          <a href="tel:092-120-2379">092-120-2379</a>
        </div>
        <div className={classes.info}>
          <p>Visit</p>
          <a
            href="https://maps.app.goo.gl/TNCn7Bnhzhhhm3r3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            47/1  Moo.4  Khlong Nueng,  Khlong Luang,  Pathum Thani  12120
          </a>
        </div>
      </div>
      <IconContact />
    </div>
  );
}