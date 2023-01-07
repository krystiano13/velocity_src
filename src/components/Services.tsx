import React from "react";
import "../styles/services.css";

import s1 from "../images/s1.jpeg";
import s2 from "../images/s2.jpeg";

const Services = () => {
  return (
    <div className="ServicesWrapper">
      <h2 className="ServicesTitle">Services</h2>
      <h3 className="ServicesSubtitle">
        THIS IS SOME TEXT INSIDE OF A DIV BLOCK.
      </h3>
      <div className="ServicesContainer">
        <div className="Service">
          <img className="ServiceImage" src={s1} alt="service nr 1" />
          <h4 className="ServiceName">SERVICE ONE</h4>
          <p className="ServiceDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse varius.
          </p>
          <div className="btnContainer"></div>
          <button className="LearnMoreButton">LEARN MORE</button>
        </div>
        <div className="Service">
          <img className="ServiceImage" src={s2} alt="service nr 2" />
          <h4 className="ServiceName">SERVICE TWO</h4>
          <p className="ServiceDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse varius.
          </p>
          <div className="btnContainer"></div>
          <button className="LearnMoreButton">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
