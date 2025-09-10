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
      description: "niuiui",
    },
    {
      title: "CSS 3",
      icon: CssIcon,
      description: "niuiui",
    },
    {
      title: "JavaScript",
      icon: JavaScriptIcon,
      description: "niuiui",
    },
    {
      title: "React",
      icon: ReactIcon,
      description: "niuiui",
    },
  ]

  return (
    <div>
      <h3>My Skills</h3>
      <div className={classes["skills-area"]}>
        {skillItems.map(({ title, icon, description }, index) => {
          const isLastRow = skillItems.length % 3 === 1 && index === skillItems.length - 1;

          return (
            <div
              key={title}
              className={classes.skillItem}
              style={isLastRow ? { gridColumn: "2/3" } : {}}
            >
              <img className={classes.iconSkill} src={icon} alt={title} />
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}