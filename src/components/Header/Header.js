import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../logo_transparent_small.png";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <Navbar />
    </header>
  );
};

export default Header;
