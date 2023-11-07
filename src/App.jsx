import "./App.scss";

import computer_lad from "./Resources/images/computer_lad.svg";
import iot from "./Resources/images/iot-devices_cover.webp";
import background from "./Resources/images/wickedbackground435.png";
import ProjectTileList from "./Components/ProjectTileList/ProjectTileList";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FloatingText from "./Components/FloatingText/FloatingText";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div class="intro">
        <img src={background} alt="picture" className="intro__background" />
        <div className="intro-navbar">
          <Navbar />
        </div>
        <div class="intro__container">
          <h2 class=" intro__name">
            <FloatingText />
          </h2>
        </div>
      </div>

      <div class="about__container">
        <img class="about__container__face" src={computer_lad} />

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

      <Skills />

      <div className="projects-container">
        <ProjectTileList />
      </div>
      <div class="research" id="research">
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
        <br></br>
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
          with a safer IoT experience.
          <br></br>
          <br></br>
          Additionally, it is crucial to inform users about potential weaknesses
          associated with these devices, empowering them to take proactive
          measures to safeguard their privacy and data. In conclusion,
          continuous efforts to identify and mitigate network vulnerabilities in
          IoT devices are essential to ensure a secure and trustworthy
          environment. Through a collaborative approach involving researchers,
          manufacturers, legislative bodies, and end-users, we can establish a
          robust framework that effectively safeguards the rapidly expanding IoT
          ecosystem.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
