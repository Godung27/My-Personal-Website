import classes from "./Experience.module.css"

import JavaScriptHtmlCssImg from "../../../assets/image/Experience/JavaScript-HTML,CSS.png"
import JavaScriptGuessMyNumberImg from "../../../assets/image/Experience/JavaScript-GuessMyNumber.png"
import JavaScriptPigGameImg from "../../../assets/image/Experience/JavaScript-PigGame.png"
import JavaScriptBankistImg from "../../../assets/image/Experience/JavaScript-Bankist.png"
import ReactReactEssentialsImg from "../../../assets/image/Experience/React-ReactEssentials.png"
import ReactTicTacToeImg from "../../../assets/image/Experience/React-TicTacToe.png"
import ReactInvestmentCalculatorImg from "../../../assets/image/Experience/React-InvestmentCalculator.png"
import ReactStylingImg from "../../../assets/image/Experience/React-Styling.png"
import ReactCountdownGameImg from "../../../assets/image/Experience/React-CountdownGame.png"
import ReactProjectManagementImg from "../../../assets/image/Experience/React-ProjectManagement.png"
import ReactOnlineShopImg from "../../../assets/image/Experience/React-OnlineShop.png"
import ReactPlacePickerImg from "../../../assets/image/Experience/React-PlacePicker.png"
import ReactQuizGameImg from "../../../assets/image/Experience/React-QuizGame.png"

export default function Experience() {
  const experienceItems = [
    {
      title: "HTML-CSS",
      code: "JavaScript",
      photo: JavaScriptHtmlCssImg,
      description: "gggggggggggggggggggggggggggggggggggggggggggg",
    },
    {
      title: "Guess My Number",
      code: "JavaScript",
      photo: JavaScriptGuessMyNumberImg,
      description: "",
    },
    {
      title: "Pig Game",
      code: "JavaScript",
      photo: JavaScriptPigGameImg,
      description: "",
    },
    {
      title: "Bankist",
      code: "JavaScript",
      photo: JavaScriptBankistImg,
      description: "",
    },
    {
      title: "React Essentials",
      code: "React",
      photo: ReactReactEssentialsImg,
      description: "",
    },
    {
      title: "Tic-Tac-Toe",
      code: "React",
      photo: ReactTicTacToeImg,
      description: "",
    },
    {
      title: "Investment Calculator",
      code: "React",
      photo: ReactInvestmentCalculatorImg,
      description: "",
    },
    {
      title: "Styling",
      code: "React",
      photo: ReactStylingImg,
      description: "",
    },
    {
      title: "Countdown Game",
      code: "React",
      photo: ReactCountdownGameImg,
      description: "",
    },
    {
      title: "Project Management",
      code: "React",
      photo: ReactProjectManagementImg,
      description: "",
    },
    {
      title: "Online Shop",
      code: "React",
      photo: ReactOnlineShopImg,
      description: "",
    },
    {
      title: "Place Picker",
      code: "React",
      photo: ReactPlacePickerImg,
      description: "",
    },
    {
      title: "Quiz Game",
      code: "React",
      photo: ReactQuizGameImg,
      description: "",
    },
  ]

  return (
    <div>
      <h3 className={classes.topic}>Experience</h3>
      <div className={classes["experience-area"]}>
        {experienceItems.map(({ title, code, photo, description }) => {
          return (
            <div
              key={title}
              className={classes.experienceItems}
            >
              <div className={classes.box}>
                <img className={classes.photoExperience} src={photo} alt={title} />
                <h4 className={classes.title}>{title}</h4>
                <h6 className={classes.code}>{code}</h6>
                <p className={classes.description}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}