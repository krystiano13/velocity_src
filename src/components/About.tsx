import React from 'react';
import '../styles/about.css';

import facebook from '../images/facebook.png';
import google from '../images/google.png';
import pinterest from '../images/pinterest.png';
import twitter from '../images/twitter-sign.png';

const About = () => {
    return (
      <div className="AboutWrapper">
        <div className="AboutElement">
          <h5 className="AboutTitle">ABOUT VELOCITY</h5>
          <p className="AboutParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="AboutElement">
          <h5 className="AboutTitle">USEFUL LINKS</h5>
          <div className="AboutBtnWrapper">
            <button>Phasellus gravida semper nisi</button>
            <button>Suspendisse nisl elit</button>
            <button>Dellentesque habitant morbi</button>
            <button>Etiam sollicitudin ipsum</button>
          </div>
        </div>
        <div className="AboutElement">
          <h5 className="AboutTitle">SOCIAL</h5>
          <div className="AboutBtnWrapper">
            <button><img src={twitter} alt='Twitter Logo'/>Twitter</button>
            <button><img src={facebook} alt='Facebook Logo'/>Facebook</button>
            <button><img src={pinterest} alt='Pinterest Logo'/>Pinterest</button>
            <button><img src={google} alt='Google Logo'/>Google</button>
          </div>
        </div>
      </div>
    );
}

export default About;