import classes from "./Skills.module.css"

import HtmlIcon from "../../../assets/icon/Skills/HTML5_icon.svg"
import JavaScriptIcon from "../../../assets/icon/Skills/JavaScript_icon.svg"
import CssIcon from "../../../assets/icon/Skills/CSS3_icon.svg"
import ReactIcon from "../../../assets/icon/Skills/React_icon.svg"

export default function Skills() {
  const skillItems = [
    {
      title: "HTML 5",
      icon: HtmlIcon,
      description: "hihihihihihihihihihihhihihi",
    },
    {
      title: "CSS 3",
      icon: CssIcon,
      description: "",
    },
    {
      title: "JavaScript",
      icon: JavaScriptIcon,
      description: "",
    },
    {
      title: "React",
      icon: ReactIcon,
      description: "",
    },
  ]

  return (
    <div>
      <h3 className={classes.topic}>My Skills</h3>
      <div className={classes["skills-area"]}>
        {skillItems.map(({ title, icon, description }) => {
          return (
            <div
              key={title}
              className={classes.skillItem}
            >
              <img className={classes.iconSkill} src={icon} alt={title} />
              <h4 className={classes.titleSkill}>{title}</h4>
              <p className={classes.descriptionSkill}>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}