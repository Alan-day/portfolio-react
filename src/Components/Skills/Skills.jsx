import React from "react";
import "./Skills.scss";
import cSharp from "./../../Resources/images/C_Sharp_Icon.png";
import sql from "./../../Resources/images/Sql_data_base_with_logo.png";
import html from "./../../Resources/images/Vector(5).svg";
import css from "./../../Resources/images/Vector.svg";
import js from "./../../Resources/images/Vector(9).svg";
import git from "./../../Resources/images/Vector(1).svg";
import react from "./../../Resources/images/Vector(2).svg";
import spring from "./../../Resources/images/Vector(3).svg";
import java from "./../../Resources/images/Vector(4).svg";
import bem from "./../../Resources/images/Vector(8).svg";
import sass from "./../../Resources/images/Vector(10).svg";
const Skills = () => {
  return (
    <div class="skills__container">
      <h1 class="skills__container--header">Technical skills</h1>

      <div class="skills-list">
        <img class="skills-list--picture1" src={html} />
        <img class="skills-list--picture2" src={css} />
        <img class="skills-list--picture3" src={js} />
        <img class="skills-list--picture4" src={git} />
        <img class="skills-list--picture5" src={react} />
        <img class="skills-list--picture6" src={spring} />
        <img class="skills-list--picture7" src={java} />
        <img class="skills-list--picture8" src={bem} />
        <img class="skills-list--picture9" src={sass} />
        <img class="skills-list--picture10" src={cSharp} />
        <img class="skills-list--picture11" src={sql} />

        <p class="skills-list--item1">HTML5</p>
        <p class="skills-list--item2">CSS3</p>
        <p class="skills-list--item3">Javascript</p>
        <p class="skills-list--item4">Git</p>
        <p class="skills-list--item5">React</p>
        <p class="skills-list--item6">Spring Boot</p>
        <p class="skills-list--item7">Java</p>
        <p class="skills-list--item8">BEM</p>
        <p class="skills-list--item9">SASS</p>
        <p class="skills-list--item10">C#</p>
        <p class="skills-list--item11">SQL</p>
      </div>
      <div>
        <p class="skills__container--paragraph">
          I'm a recent computer science & coding bootcamp graduate. My
          proficiency now extends to various technologies, such as Java, Spring
          Boot, React, JavaScript, Git, BEM, HTML, SASS, and CSS. Furthermore,
          I've wrapped up couple of full-stack projects and currently working on
          another, in addition to working on learning more about .NET framework.
          My skill set encompasses Java programming and testing, React-based UI
          development, JavaScript, Git version control, adherence to BEM
          methodology for CSS, HTML structuring, SASS styling, and a
          comprehensive understanding of full-stack development concepts. After
          finishing my course, I've ventured into backend development, delving
          into the application of C# and SQL server.
        </p>
      </div>
    </div>
  );
};

export default Skills;
