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
      title: "1",
      photo: JavaScriptHtmlCssImg,
      description: "",
    },
    {
      title: "2",
      photo: JavaScriptGuessMyNumberImg,
      description: "",
    },
    {
      title: "3",
      photo: JavaScriptPigGameImg,
      description: "",
    },
    {
      title: "4",
      photo: JavaScriptBankistImg,
      description: "",
    },
    {
      title: "5",
      photo: ReactReactEssentialsImg,
      description: "",
    },
    {
      title: "6",
      photo: ReactTicTacToeImg,
      description: "",
    },
    {
      title: "7",
      photo: ReactInvestmentCalculatorImg,
      description: "",
    },
    {
      title: "8",
      photo: ReactStylingImg,
      description: "",
    },
    {
      title: "9",
      photo: ReactCountdownGameImg,
      description: "",
    },
    {
      title: "10",
      photo: ReactProjectManagementImg,
      description: "",
    },
    {
      title: "11",
      photo: ReactOnlineShopImg,
      description: "",
    },
    {
      title: "12",
      photo: ReactPlacePickerImg,
      description: "",
    },
    {
      title: "13",
      photo: ReactQuizGameImg,
      description: "",
    },
  ]

  return (
    <div>
      <h3 className={classes.topic}>Experience</h3>
      <div className={classes["experience-area"]}>
        {experienceItems.map(({ title, photo, description }) => {
          return (
            <div
              key={title}
              className={classes.experienceItems}
            >
              <div className={classes.box}>
                <img className={classes.photoExperience} src={photo} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}