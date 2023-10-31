import React from "react";
import "./FloatingText.scss";
import { useSpring, animated } from "react-spring";
import alan from "../../Resources/images/alan_picture12.png";
const FloatingText = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateY(-5px)" }, // Adjust translateY from -20px to -50px
    from: { opacity: 0.5, transform: "translateY(2000px)" }, // Adjust translateY from 200px to 0px
  });

  return (
    <animated.div style={props} className="floating">
      <div className="floating__name">
        <h2>
          Hey! I'm Alan <br /> - Junior Software Developer based in Berkshire.
        </h2>
      </div>
      <img class="floating__picture" src={alan} id="about" />
    </animated.div>
  );
};

export default FloatingText;
