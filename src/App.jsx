import "./App.scss";

import computer_lad from "./images/computer_lad.svg";
import alan from "./images/alan_picture.jpg";
import html from "./images/Vector(5).svg";
import css from "./images/Vector.svg";
import js from "./images/Vector(9).svg";
import git from "./images/Vector(1).svg";
import react from "./images/Vector(2).svg";
import spring from "./images/Vector(3).svg";
import java from "./images/Vector(4).svg";
import bem from "./images/Vector(8).svg";
import sass from "./images/Vector(10).svg";
import iot from "./images/iot-devices_cover.webp";

function App() {
  return (
    <div className="App">
      <div class="intro">
        <div class="intro__container">
          <h2 class=" intro__name">&#128075; Hey! I'm Alan </h2>
          <h3 class="intro__position">
            A Junior Software Developer based in Berkshire.
          </h3>
        </div>

        <img class="intro__picture" src={computer_lad} id="about" />
      </div>

      <div class="about__container">
        <img class="about__container__face" src={alan} />

        <h2 class="about__container__header">About Me</h2>
        <p class="about__container__paragraph1">
          I recently started my professional journey as a junior software
          engineer. After graduating university in 2023 I enrolled on a
          fantastic course by _nology where I learnt about the application of
          the newest technologies. This heavily project-based training allowed
          me to fully apply the knowledge gained during my studies.
        </p>
        <p class="about__container__paragraph2">
          What are you going to find on this page? The goal of this page is to
          show projects I did for _nology and for personal development. The
          first project is a basic calculator developed in vanilla javascript
          and then as you move along the projects get more complex. During my
          time at university my interests revolved around cyber security of
          Internet of Things therefore at the bottom I included a brief overview
          of the research done for the purpose of my dissertation.
        </p>
      </div>

      <div class="skills__container">
        <h1 class="skills__container--header">Technical skills</h1>
        <p class="skills__container--paragraph">
          As a junior developer who recently completed a bootcamp, where I have
          gained proficiency in several technical skills. Now I have some
          experience with Java, Spring Boot, React, JavaScript, Git, BEM, HTML,
          SASS, and CSS. Additionally,I've completed a full stack project
          (currently working on another one) and done other smaller projects. My
          skills include Java programming, building user interfaces with React,
          JavaScript development, version control with Git, adhering to BEM
          methodology for CSS, structuring HTML, utilizing SASS for styling, and
          understanding full stack development concepts. Overall, I am
          well-prepared to contribute to web development projects with my
          diverse skill set.
        </p>
      </div>

      <div className="technical-skills">
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

          <p class="skills-list--item1">HTML5</p>
          <p class="skills-list--item2">CSS3</p>
          <p class="skills-list--item3">Javascript</p>
          <p class="skills-list--item4">Git</p>
          <p class="skills-list--item5">React</p>
          <p class="skills-list--item6">Spring Boot</p>
          <p class="skills-list--item7">Java</p>
          <p class="skills-list--item8">BEM</p>
          <p class="skills-list--item9">SASS</p>
        </div>
      </div>
      <section class="research" id="research">
        <h1 class="research__header">Research on IoT vulnerabilities</h1>

        <p class="research__paragraph">
          In 2022 I started my research on IoT devices and I focused on network
          side of vulnerabilities (weak or lack of encrytpion, open network
          ports, no authentication and insufficient protocols). It is a common
          knowledge in IT community that these devices are not safe. What makes
          them so prone to exploitation? That was the question that made me
          start my research. Because of the overwhelming plethora of scientific
          papers I decided to find few taxonomies of problems and narrow my
          examination to the network side of vulnerabilities.
        </p>
        <p class="research__paragraph">
          As an object of study, I chose the camera that was relatively popular
          on the market (one of the first items that appeared on the list of
          popular e-commerce websites) so I know that the specimen is relevant
          to research of others and findings will apply to most devices of that
          type. After analysing the available materials, I realised that we have
          only few academic analyses in form of case studies of IoT cameras and
          that the threats and ways of attacking said devices constantly evolves
          so my input in scientific research is an updated view on the network
          vulnerabilities and practical test of suggested methods that are based
          on taxonomy of several researchers.
        </p>
        <h1 class="research__header">Abstract</h1>
        <p class="research__paragraph">
          Market for IoT devices grows larger year by year and more than 10
          billions of devices is connected to the internet in 2022 with prospect
          of doubling that figure by the end of the decade. Security issues have
          became a greater concern after recent DDoS attacks using IoT equipment
          for disrupting operation popular public services. The purpose of this
          work was to explore network vulnerabilities of IoT devices to
          understand what problems exist in the field of IoT, evaluate security
          concerns and perform tests on a smart camera to compare the results
          with previous scientists doing similar case study. There is a
          noticable progress in security measures applied to some types of IoT
          devices yet there are many vulnerabilities that can be exploited and
          the field needs to be explored to a greater extent. I’m proposing few
          solutions like standarisation imposed by means of legislature and
          mandatory testing done by the manufacturer notifying consumer of the
          possible vulnerabilities.{" "}
        </p>
        <div className="research__image">
         
          <img src={iot} />
        </div>
        <h1 class="research__header">Conclusions</h1>
        <p class="research__paragraph">
          Over the years, network vulnerabilities have undergone substantial
          transformations, yet they continue to pose significant threats,
          particularly in the realm of IoT devices. To effectively address these
          concerns, a more proactive approach through continuous testing and
          research is imperative, considering the inherent heterogeneity of
          these devices. Notably, progress has been made in the application of
          cryptography to enhance the security of smart cameras. However, to
          solidify this assertion, empirical data must be gathered to account
          for the diverse array of IoT devices in the market. My research
          highlights the urgency for legislative authorities to step in and
          establish standardized security measures for these devices. By doing
          so, we can bolster the overall security landscape and provide users
          with a safer IoT experience. Additionally, it is crucial to inform
          users about potential weaknesses associated with these devices,
          empowering them to take proactive measures to safeguard their privacy
          and data. In conclusion, continuous efforts to identify and mitigate
          network vulnerabilities in IoT devices are essential to ensure a
          secure and trustworthy environment. Through a collaborative approach
          involving researchers, manufacturers, legislative bodies, and
          end-users, we can establish a robust framework that effectively
          safeguards the rapidly expanding IoT ecosystem.
        </p>
      </section>
    </div>
  );
}

export default App;
