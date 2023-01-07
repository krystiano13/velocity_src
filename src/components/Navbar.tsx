import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  const [subpage, setSubpage] = React.useState("home");
  let location = useLocation();
  const checkNavbar = () => {
    if (location.pathname === "/velocity/") {
      setSubpage("home");
    } else setSubpage("contact");
  };
  React.useEffect(() => {
      checkNavbar();
  }, [location]);
  return (
    <div className="NavbarWrapper">
      <h1 className="NavbarTitle">VELOCITY</h1>
      <div className="NavbarButtons">
        <NavLink
          className="navlink"
          to="/velocity/"
        >
          <button
            className={
              subpage === "home" ? "NavbarButton choosed" : "NavbarButton"
            }
          >
            Home
          </button>
        </NavLink>
        <NavLink
          className="navlink"
          to="/velocity/contact"
        >
          <button
            className={
              subpage === "contact" ? "NavbarButton choosed" : "NavbarButton"
            }
          >
            Contact
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
