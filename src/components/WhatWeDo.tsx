import React from 'react';
import '../styles/What.css';

import { ReactComponent as SVG1 } from '../images/svg1.svg';
import { ReactComponent as SVG2 } from "../images/svg2.svg";
import { ReactComponent as SVG3 } from "../images/svg3.svg";

import whatwedoData from './whatwedoData';

const WhatWeDo = () => {
    return (
      <div className="WhatWrapper">
        <h2 className="WhatTitle">WHAT WE DO</h2>
        <h3 className="WhatSubtitle">
          THIS IS SOME TEXT INSIDE OF A DIV BLOCK
        </h3>
        <div className="BlockWrapper">
          {whatwedoData.map((item) => (
            <div className="Block" key={item.id}>
              <div className="Container">
                <div className="SvgContainer">
                  {item.imgId === 1 && <SVG1 />}
                  {item.imgId === 2 && <SVG2 />}
                  {item.imgId === 3 && <SVG3 />}
                </div>
              </div>
              <h4 className="BlockTitle">{item.title}</h4>
              <p className="BlockDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default WhatWeDo;
