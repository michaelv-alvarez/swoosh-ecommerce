import React from "react";
import Navbar from "../Navbar/Navbar";
import logo_header from "../../logo_primary-removebg.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo_header} alt="" className="header__logo" />
      <Navbar />
    </header>
  );
};

export default Header;
