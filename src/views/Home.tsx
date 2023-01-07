import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import Tab from "../components/Tab";
import "../styles/Home.css";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Hero subpage="home"/>
      <WhatWeDo />
      <Services />
      <Tab />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
