import JavaScriptHtmlCssImg from "../../../assets/image/Experiences/JavaScript-HTML,CSS.png"
import JavaScriptGuessMyNumberImg from "../../../assets/image/Experiences/JavaScript-GuessMyNumber.png"
import JavaScriptPigGameImg from "../../../assets/image/Experiences/JavaScript-PigGame.png"
import JavaScriptBankistImg from "../../../assets/image/Experiences/JavaScript-Bankist.png"
import ReactReactEssentialsImg from "../../../assets/image/Experiences/React-ReactEssentials.png"
import ReactTicTacToeImg from "../../../assets/image/Experiences/React-TicTacToe.png"
import ReactInvestmentCalculatorImg from "../../../assets/image/Experiences/React-InvestmentCalculator.png"
import ReactStylingImg from "../../../assets/image/Experiences/React-Styling.png"
import ReactCountdownGameImg from "../../../assets/image/Experiences/React-CountdownGame.png"
import ReactProjectManagementImg from "../../../assets/image/Experiences/React-ProjectManagement.png"
import ReactOnlineShopImg from "../../../assets/image/Experiences/React-OnlineShop.png"
import ReactPlacePickerImg from "../../../assets/image/Experiences/React-PlacePicker.png"
import ReactQuizGameImg from "../../../assets/image/Experiences/React-QuizGame.png"

export const experienceItems = [
  {
    title: "HTML-CSS",
    code: "JavaScript",
    photo: JavaScriptHtmlCssImg,
    description:
      `This is my first project. I practiced using basic HTML and CSS. I created a simple web page to build a basic HTML structure and used CSS to style the background, text, colors, fonts, and layout.`
    ,
    github: "https://github.com/Godung27/learningJavaScript/tree/master/04-HTML-CSS",
  },
  {
    title: "Guess My Number",
    code: "JavaScript",
    photo: JavaScriptGuessMyNumberImg,
    description:
      `The Guess My Number game lets the player guess a randomly generated number between 1 to 20. Feedback is given for each guess, and the score decreases with each wrong attempt. When guessed correctly, the game displays a success message and updates the high score. The "Again" button allows the player to restart the game.`
    ,
    github: "https://github.com/Godung27/learningJavaScript/tree/master/05-Guess-My-Number",
  },
  {
    title: "Pig Game",
    code: "JavaScript",
    photo: JavaScriptPigGameImg,
    description:
      `This is a Pig Game where two players take turns rolling a dice to accumulate points in each round. If a player rolls a 1, they lose their current round score and the turn passes to the other player. Players can choose to “Hold” to save their accumulated points. The first player to reach 100 points wins, and the game can be restarted with the “New Game” button.`
    ,
    github: "https://github.com/Godung27/learningJavaScript/tree/master/07-Pig-Game",
  },
  {
    title: "Bankist",
    code: "JavaScript",
    photo: JavaScriptBankistImg,
    description:
      `The Bankist App simulates an online banking system. Users log in with a username and PIN to check their balance, view transactions, transfer money, request loans, and close accounts.`
    ,
    github: "https://github.com/Godung27/learningJavaScript/tree/master/11-Arrays-Bankist",
  },
  {
    title: "React Essentials",
    code: "React",
    photo: ReactReactEssentialsImg,
    description:
      `This is my first React project, created to demonstrate the React essentials, including components, JSX, props, state, and handling events.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/01-React-Essentials",
  },
  {
    title: "Tic-Tac-Toe",
    code: "React",
    photo: ReactTicTacToeImg,
    description:
      `This is a Tic-Tac-Toe game where two players take turns putting X or O on a 3x3 board. Players can enter their names, and the game tracks their move history to analyze their strategies. The first player to get 3 in a row wins, and the game displays a success message for the winner. If no one wins, it displays a tie. The "Rematch" button allows the players to restart the game.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/02-Essentials-Deep-Dive",
  },
  {
    title: "Investment Calculator",
    code: "React",
    photo: ReactInvestmentCalculatorImg,
    description:
      `This is a Investment Calculator helps you visualize how your savings can grow over time. Simply enter your Initial Investment, Annual Contribution, Expected Annual Return, and Investment Duration. The calculator then provides a detailed yearly breakdown showing: Investment Value, Annual Interest Earned, Total Interest Accumulated, and Investment Capital. It's a clear and easy way to track your potential financial growth.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/03-Essentials-Practice",
  },
  {
    title: "Styling",
    code: "React",
    photo: ReactStylingImg,
    description:
      `This is a demo sign-up page designed to show how the process works. Users are required to fill in all the necessary fields. If important information such as an email or password is missing, the empty fields will turn red to prompt the user to complete them.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/04-Styling",
  },
  {
    title: "Countdown Game",
    code: "React",
    photo: ReactCountdownGameImg,
    description:
      `The Countdown Game has four levels of difficulty, based on the number of seconds. When the player clicks the "Start" button, the timer begins counting down in real time. If they fail to press the "Stop" button before time runs out, they lose, and a modal will pop up to let them know that time is up. If they manage to stop the timer in time, a modal will appear showing their score. The closer they stop the timer to zero, the higher their score. The modal will also display the exact time they stopped the countdown.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/06-Refs-Portals",
  },
  {
    title: "Project Management",
    code: "React",
    photo: ReactProjectManagementImg,
    description:
      `This is a Project Management system that allows users to create new projects by entering a name, details, and date. Users can also add sub-notes (similar to notes or subtasks) within each project. Projects can be accessed via a sidebar, and users can delete unwanted projects or notes as needed.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/07-Practice-Project-Project-Management",
  },
  {
    title: "Online Shop",
    code: "React",
    photo: ReactOnlineShopImg,
    description:
      `This is a Online Shop that allows selection of clothing items to be added to the cart by clicking the "Add to Cart" button. The selected items are then moved to the Cart, and clicking the "Cart" button opens a modal displaying the chosen items. Inside the modal, the quantity of each item can be adjusted, and the total price of all selected items is displayed.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/08-Advanced-State-Management-with-Context-useReducer",
  },
  {
    title: "Place Picker",
    code: "React",
    photo: ReactPlacePickerImg,
    description:
      `This is a Place Picker that shows images of places from around the world, sorted by distance from the users location—from closest to farthest. To add a place to the "I'd like to visit ..." list, simply click on its image. To remove a place, click on it again, and a modal will appear asking to confirm with yes or no. If no response is given within a set time, the place will be removed automatically. The website also saves the selected places, so they remain even after the page is reloaded.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/09-Side-Effects-useEffect",
  },
  {
    title: "Quiz Game",
    code: "React",
    photo: ReactQuizGameImg,
    description:
      `This is a Quiz Game where players answer a series of preset questions one by one. Each question includes multiple-choice options and a time limit. Once all questions have been completed, the game displays the results, including the total score, the number of correct answers, incorrect answers, and unanswered questions.`
    ,
    github: "https://github.com/Godung27/LearningReact/tree/master/10-Demo-Project-React-Quiz-App",
  },
]