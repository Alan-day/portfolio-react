import morse from "./images/morse_code_translator.png";
import tic from "./images/Tic-Tac-Toe-Product.jpg";
import beer from "./images/punk_api.png";
import drinkVoyage from "./images/drink-voyage.png";
import weather from "./images/weather-app.png";
import hangman from "./images/hanged_bro.png";
import ticket from "./images/ticket_tracker.png";
import carPark from "./images/Car-park.jpg";
import stock from "./images/crypto-stock.png";
import calculatorExtended from "./images/calculator.png";
import spending from "./images/expense-tracker.png";

const anotherData = [
  {
    project_picture: `${morse}`,
    title: "JavaScript (Vanilla)",
    header: "Morse Code Translator",
    description:
      "Project that was part of technical skills review completed within one session.",
    code_link: "https://github.com/Alan-day/morse-code-translator",
    preview_link: "https://alan-day.github.io/morse-code-translator/",
  },
  {
    project_picture: `${tic}`,
    title: "Javascript (Vanilla)",
    header: "Tic-Tac-Toe",
    description: "My first game that runs in a browser.",
    code_link: "https://github.com/Alan-day/tic-tac-toe",
    preview_link: "https://alan-day.github.io/tic-tac-toe/",
  },
  {
    project_picture: `${beer}`,
    title: "REACT",
    header: "Beer Page",
    description:
      "A front-end project using open source API (PUNK API) where I applied filter function and sorting based on category.",
    code_link: "https://github.com/Alan-day/punk-api",
    preview_link: "https://alan-day.github.io/punk-api/",
  },
  {
    project_picture: `${drinkVoyage}`,
    title: "REACT / Spring / MySQL",
    header: "Drink voyage",
    description:
      "My first full-stack project that shows various alcohol cards from Europe (card consists of name, type, country of origin and a brief description of the alcohol). User can browse, filter, create and delete alcohol cards. I applied Repository-Service-Controller model in Spring Boot communicating with MySQL database.",
    code_link: "https://github.com/Alan-day/DrinkVoyage-frontEnd",
    back_end_link: "https://github.com/Alan-day/DrinkVoyage-SpringBackEnd",
  },
  {
    project_picture: `${weather}`,
    title: "REACT",
    header: "Weather App",
    description:
      "A front-end project showing current weather based on user location, to-do list that allows for creating/deleting tasks as well as Google Maps feature displaying user location.",
    code_link: "https://github.com/Alan-day/weather-app",
    preview_link: "https://alan-day.github.io/weather-app/",
  },
  {
    project_picture: `${hangman}`,
    title: "JAVA",
    header: "Hangman",
    description:
      "A simple Java game where the user guesses names of animal species from the zoo.",
    code_link: "https://github.com/Alan-day/new-java-hangman",
  },
  {
    project_picture: `${ticket}`,
    title: "REACT",
    header: "Ticket Tracker",
    description:
      "My first React project which helped me solidify concepts learnt during the first week of working in React library.",
    code_link: "https://github.com/Alan-day/ticket-tracker",
  },
  {
    project_picture: `${calculatorExtended}`,
    title: "JAVA",
    header: "Calculator (extended)",
    description:
      "An extended version of a calculator that applies BIDMAS and allows for quick calculations in the command line",
    code_link: "https://github.com/Alan-day/Calculator",
  },
  {
    project_picture: `${stock}`,
    title: "REACT",
    header: "Crypto/Stock prices tracker",
    description:
      "Crypocurrency and stock market tracker. Currently the app doesn't allow for search as I used my API calls allowance and haven't renewed my subscription",
    code_link: "https://github.com/Alan-day/crypto-tracker",
  },
  {
    project_picture: `${spending}`,
    title: "REACT / Spring / MySQL",
    header: "Expense tracker",
    description:
      "Full stack application for adding expenses and tracking spending",
    code_link: "https://github.com/Alan-day/spending-tracker",
    back_end_link: "https://github.com/Alan-day/spending-tracker--back-end",
  },
  {
    project_picture: `${carPark}`,
    title: "JAVA",
    header: "Car park",
    description:
      "Mini project that allows for finding suitable space for a car/motorbike/van and keeps track of parked cars",
    code_link: "https://github.com/Alan-day/java-car-park",
  },
];

export default anotherData;
