import classes from "./WelcomeText.module.css"

export default function WelcomeText() {
  return (
    <div className={classes.areaWelcomeText}>
      <h2>
        Hello<br />
        I'm Parnuvich
      </h2>
      <p>
        Welcome to my website, where I share my journey into software development.
      </p>
      <a href="mailto:parnuvich.l@gmail.com">Contact Me</a>
    </div>
  );
}