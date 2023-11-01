import morse from "./images/morse_code_translator.png";
import game from "./images/card_game.jpg";
import cert from "./images/cSharp_learning.png";
import blog from "./images/Purpose-of-Blogging.jpeg";

const recentData = [
  {
    project_picture: `${game}`,
    title: "JavaScript (Vanilla)",
    header: "Card game",
    description:
      "A cool project using basic JavaScript. I came up with this idea during my bootcamp, and as I got better at handling web page elements and making things interact, I built it. It's not perfect yet, but the main parts are working well..",
    code_link: "https://github.com/Alan-day/javascript-game",
    preview_link: "https://alan-day.github.io/javascript-game/",
  },
  {
    project_picture: `${cert}`,
    title: "C#",
    header: "C# Fundamentals",
    description:
      "I'm currently pursuing Microsoft C# Fundamentals certification (hosted by FreeCodeCamp) to demonstrate my proficiency in that language.",
  },
  {
    project_picture: `${blog}`,
    title: "REACT/C#/SQL Server",
    header: "Blog",
    description:
      "Alongside two other projects in this section, I'm developing my own blogging platform which is a full stack application using C# and sql server",
    code_link: "https://github.com/Alan-day/blog-application",
  },
];

export default recentData;
