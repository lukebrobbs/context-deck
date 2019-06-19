import React from "react";
import { Anim } from "spectacle";

const AnimatedComponent = ({ children }) => {
  return (
    <Anim
      fromStyle={{
        opacity: 0,
        transform: "translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)"
      }}
      toStyle={[
        {
          opacity: 1,
          transform: "translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)"
        }
      ]}
      easing={"bounceOut"}
      transitionDuration={500}
    >
      <div>{children}</div>
    </Anim>
  );
};

export default AnimatedComponent;
