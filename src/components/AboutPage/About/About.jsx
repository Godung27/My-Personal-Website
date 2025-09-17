import AreaSection from "../../AreaSection/AreaSection.jsx";
import Skills from "../Skills/Skills.jsx"
import Experience from "../Experience/Experience.jsx";

export default function () {
  return (
    <AreaSection theme="dark" id="about">
      <h2>About</h2>
      <Skills />
      <Experience />
    </AreaSection>
  );
}