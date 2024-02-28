import React from "react";
import hero from "./assets/hero.mp4";

const Hero = () => {
  return (
    <div>
      <video src={hero}></video>
    </div>
  );
};

export default Hero;
