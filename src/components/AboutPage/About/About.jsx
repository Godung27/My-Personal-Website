import AreaSection from "../../AreaSection/AreaSection.jsx";
import Skills from "../Skills/Skills.jsx"
import Experience from "../Experience/Experience.jsx";

import classes from "./About.module.css"

export default function () {
  return (
    <AreaSection theme="dark" id="about">
      <h2>About</h2>
      <p className={classes.descriptionAbout}>
        {`Hello! My name is Parnuvich.

    I'm passionate about becoming a developer. Although I hold a degree in Marketing, I discovered my true interest in software development.

    I'm currently developing my skills in JavaScript and React, aiming to become a professional developer.With my background in marketing, I bring a strong problem-solving mindset and user-oriented thinking into my coding.

    My goal is to build applications that are efficient, creative, and impactful.`}
      </p>
      <Skills />
      <Experience />
    </AreaSection>
  );
}