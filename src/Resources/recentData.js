import game from "./images/card_game.jpg";
import cert from "./images/cert.png";
import blog from "./images/Purpose-of-Blogging.jpeg";

const recentData = [
  {
    project_picture: `${game}`,
    title: "JavaScript (Vanilla)",
    header: "Card game",
    description:
      "A fun project developed in Vanilla JavaScript. I came up with this idea during my bootcamp, and as I got better at handling web page elements and making things interact, I decided to give it a go. It has a terrible styling so far but will be polished soon",
    code_link: "https://github.com/Alan-day/javascript-game",
    preview_link: "https://alan-day.github.io/javascript-game/",
  },
  {
    project_picture: `${cert}`,
    title: "C#",
    header: "C# Fundamentals",
    view: "https://www.freecodecamp.org/certification/alanowski/foundational-c-sharp-with-microsoft",
    description:
      "I've recently passed Microsoft C# fundamentals exam where I demonstrated my proficiency in C#",
  },
  {
    project_picture: `${blog}`,
    title: "REACT/C#/SQL Server",
    header: "Blog",
    description:
      "Alongside two other projects in this section, I'm developing my own blogging platform which is a full stack application using C# and sql server. Currently alpha version in a different repository",
    code_link: "https://github.com/Alan-day/Blog-asp-net-application",
  },
];

export default recentData;
