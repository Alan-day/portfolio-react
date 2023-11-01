import React from "react";
import "./FloatingText.scss";
import { useSpring, animated } from "react-spring";
import alan from "../../Resources/images/alan_picture12.png";
const FloatingText = () => {
  const propsText = useSpring({
    to: { opacity: 1, transform: "translateY(-5px)" }, // Adjust translateY from -20px to -50px
    from: { opacity: 0.5, transform: "translateY(1000px)" }, // Adjust translateY from 200px to 0px
  });

  const propsPicture = useSpring({
    to: { opacity: 1, transform: "translateY(0px)" }, // Adjust translateY from -20px to -50px
    from: { opacity: 0.5, transform: "translateX(1000px)" }, // Adjust translateY from 200px to 0px
  });

  return (
    <div className="floating">
      <animated.div style={propsText} className="floating__name">
        <h2>
          Hey! I'm Alan <br /> - Junior Software Developer based in Berkshire.
        </h2>
      </animated.div>
      <animated.div style={propsPicture}>
        <img class="floating__picture" src={alan} id="about" />
      </animated.div>
    </div>
  );
};

export default FloatingText;
