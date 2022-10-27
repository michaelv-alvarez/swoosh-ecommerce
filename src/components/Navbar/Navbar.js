import React from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import logo_letters from "../../logo_letters_transparent.png";

const Navbar = () => {
  return (
    <nav className="header__nav">
      <a href="/" className="nav__link">
        Home
      </a>
      <a href="/" className="nav__link">
        Shop
      </a>
      <img src={logo_letters} alt="Logo letters" className="nav__logo" />
      <a href="/" className="nav__link">
        Products
      </a>
      <a href="/" className="nav__link">
        About
      </a>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
