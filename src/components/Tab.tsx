import React from "react";

import "../styles/tab.css";
import "../styles/What.css";

import im1 from "../images/im1.jpeg";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpeg";

const Tab = () => {
  const [tab, setTab] = React.useState<number>(1);
  const [tab2, setTab2] = React.useState<number>(1);
  const [simpleArr, setSimpleArr] = React.useState<number[]>([1, 2, 3]);
  const [images, setImages] = React.useState([im1, im2, im3]);
  const [change, setChange] = React.useState<boolean>(false);

  const tabChange = (id: number) => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
      setTab(id);
    }, 400);
  };

  return (
    <div className="TabWrapper">
      <h2 className="WhatTitle">TAB SECTION</h2>
      <h3 className="WhatSubtitle">THIS IS SOME TEXT INSIDE OF A DIV BLOCK</h3>
      <div className="ButtonsArea">
        {simpleArr.map((item) => (
          <button
            onClick={() => {
              setTab2(item);
              tabChange(item);
            }}
            className={tab2 === item ? "TabButton ChoosenTab" : "TabButton"}
          >
            TAB BUTTON {item}
          </button>
        ))}
      </div>
      <section
        className={
          change === true ? "TabContentWrapper op" : "TabContentWrapper"
        }
      >
        <img className="TabImage" src={images[tab - 1]} />
        <h4 className="WhatTitle diffMargin">Heading</h4>
        <p className="TabText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </section>
    </div>
  );
};

export default Tab;
