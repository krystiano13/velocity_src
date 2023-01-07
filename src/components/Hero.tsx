import React from "react";
import "../styles/Hero.css";

interface HeroInterface {
  subpage: string;
}

const Hero: React.FC<HeroInterface> = ({ subpage }) => {
  return (
    <div className="HeroWrapper">
      <h1 className="HeroTitle">
        {subpage === "home" ? "THIS IS VELOCITY" : "CONTACT"}
      </h1>
      {subpage === "home" && (
        <>
          <h2 className="HeroSubtitle">A WEBSITE MADE BY CRISTIANO</h2>
          <div className="HeroButtonsWrapper">
            <button className="HeroButton">SIGN UP</button>
            <button className="EmptyHeroButton">LEARN MORE</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
